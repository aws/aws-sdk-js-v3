import { connect, constants, ClientHttp2Session } from "http2";

import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

import { writeRequestBody } from "./write-request-body";
import { getTransformedHeaders } from "./get-transformed-headers";

/**
 * Represents the http2 options that can be passed to a node http2 client.
 */
export interface NodeHttp2Options {
  /**
   * The maximum time in milliseconds that a stream may remain idle before it
   * is closed.
   */
  requestTimeout?: number;

  /**
   * The maximum time in milliseconds that a session or socket may remain idle
   * before it is closed.
   * https://nodejs.org/docs/latest-v12.x/api/http2.html#http2_http2session_and_sockets
   */
  sessionTimeout?: number;
}

export class NodeHttp2Handler implements HttpHandler {
  private readonly connectionPool: Map<string, ClientHttp2Session>;

  constructor(private readonly http2Options: NodeHttp2Options = {}) {
    this.connectionPool = new Map<string, ClientHttp2Session>();
  }

  destroy(): void {
    for (const [_, http2Session] of this.connectionPool) {
      http2Session.destroy();
    }
    this.connectionPool.clear();
  }

  handle(
    request: HttpRequest,
    { abortSignal }: HttpHandlerOptions
  ): Promise<{ response: HttpResponse }> {
    return new Promise((resolve, reject) => {
      // if the request was already aborted, prevent doing extra work
      if (abortSignal && abortSignal.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      const { hostname, method, port, protocol, path, query } = request;
      const queryString = buildQueryString(query || {});

      // create the http2 request
      const req = this.getSession(
        `${protocol}//${hostname}${port ? `:${port}` : ""}`
      ).request({
        ...request.headers,
        [constants.HTTP2_HEADER_PATH]: queryString
          ? `${path}?${queryString}`
          : path,
        [constants.HTTP2_HEADER_METHOD]: method
      });

      req.on("response", headers => {
        const httpResponse = new HttpResponse({
          statusCode: headers[":status"] || -1,
          headers: getTransformedHeaders(headers),
          body: req
        });
        resolve({ response: httpResponse });
      });

      req.on("error", reject);
      req.on("frameError", reject);
      req.on("aborted", reject);

      const { requestTimeout } = this.http2Options;
      if (requestTimeout) {
        req.setTimeout(requestTimeout, () => {
          req.close();
          const timeoutError = new Error(
            `Stream timed out because of no activity for ${requestTimeout} ms`
          );
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        });
      }

      if (abortSignal) {
        abortSignal.onabort = () => {
          req.close();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }

      writeRequestBody(req, request);
    });
  }

  private getSession(authority: string): ClientHttp2Session {
    const connectionPool = this.connectionPool;
    const existingSession = connectionPool.get(authority);
    if (existingSession) return existingSession;

    const newSession = connect(authority);
    connectionPool.set(authority, newSession);

    const { sessionTimeout } = this.http2Options;
    if (sessionTimeout) {
      newSession.setTimeout(sessionTimeout, () => {
        newSession.close();
        connectionPool.delete(authority);
      });
    }
    return newSession;
  }
}
