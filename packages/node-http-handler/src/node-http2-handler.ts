import { connect, constants, ClientHttp2Session } from "http2";

import { Readable } from "stream";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import {
  HttpHandler,
  HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  NodeHttpOptions,
  HeaderBag
} from "@aws-sdk/types";

import { writeRequestBody } from "./write-request-body";

export class NodeHttp2Handler
  implements HttpHandler<Readable, NodeHttpOptions> {
  private readonly connectionPool: Map<string, ClientHttp2Session>;

  constructor(private readonly httpOptions: NodeHttpOptions = {}) {
    this.connectionPool = new Map<string, ClientHttp2Session>();
  }

  destroy(): void {
    for (const [_, http2Session] of this.connectionPool) {
      http2Session.destroy();
    }
    this.connectionPool.clear();
  }

  handle(
    request: HttpRequest<Readable>,
    { abortSignal }: HttpHandlerOptions
  ): Promise<HttpResponse<Readable>> {
    return new Promise((resolve, reject) => {
      const { connectionTimeout, socketTimeout } = this.httpOptions;

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
        const transformedHeaders: HeaderBag = {};

        for (let name of Object.keys(headers)) {
          let headerValues = <string>headers[name];
          transformedHeaders[name] = Array.isArray(headerValues)
            ? headerValues.join(",")
            : headerValues;
        }

        const httpResponse: HttpResponse<Readable> = {
          statusCode: headers[":status"] || -1,
          headers: transformedHeaders,
          body: req
        };

        resolve(httpResponse);
      });

      req.on("error", reject);

      // TODO: wire-up any timeout logic
      // TODO: wire-up any abort logic

      writeRequestBody(req, request);
    });
  }

  private getSession(authority: string): ClientHttp2Session {
    const existingSession = this.connectionPool.get(authority);
    if (existingSession) return existingSession;

    const newSession = connect(authority);
    this.connectionPool.set(authority, newSession);
    if (this.httpOptions.connectionTimeout) {
      newSession.setTimeout(
        this.httpOptions.connectionTimeout,
        this.connectionPool.delete.bind(this.connectionPool, authority)
      );
    }
    return newSession;
  }
}
