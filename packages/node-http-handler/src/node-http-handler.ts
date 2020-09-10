import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { Agent as hAgent, request as hRequest } from "http";
import { Agent as hsAgent, request as hsRequest, RequestOptions } from "https";

import { getTransformedHeaders } from "./get-transformed-headers";
import { setConnectionTimeout } from "./set-connection-timeout";
import { setSocketTimeout } from "./set-socket-timeout";
import { writeRequestBody } from "./write-request-body";

/**
 * Represents the http options that can be passed to a node http client.
 */
export interface NodeHttpOptions {
  /**
   * The maximum time in milliseconds that the connection phase of a request
   * may take before the connection attempt is abandoned.
   */
  connectionTimeout?: number;

  /**
   * The maximum time in milliseconds that a socket may remain idle before it
   * is closed.
   */
  socketTimeout?: number;

  httpAgent?: hAgent;
  httpsAgent?: hsAgent;
}

export class NodeHttpHandler implements HttpHandler {
  private readonly httpAgent: hAgent;
  private readonly httpsAgent: hsAgent;
  private readonly connectionTimeout?: number;
  private readonly socketTimeout?: number;
  // Node http handler is hard-coded to http/1.1: https://github.com/nodejs/node/blob/ff5664b83b89c55e4ab5d5f60068fb457f1f5872/lib/_http_server.js#L286
  public readonly metadata = { handlerProtocol: "http/1.1" };

  constructor({ connectionTimeout, socketTimeout, httpAgent, httpsAgent }: NodeHttpOptions = {}) {
    this.connectionTimeout = connectionTimeout;
    this.socketTimeout = socketTimeout;
    const keepAlive = true;
    this.httpAgent = httpAgent || new hAgent({ keepAlive });
    this.httpsAgent = httpsAgent || new hsAgent({ keepAlive });
  }

  destroy(): void {
    this.httpAgent.destroy();
    this.httpsAgent.destroy();
  }

  handle(request: HttpRequest, { abortSignal }: HttpHandlerOptions): Promise<{ response: HttpResponse }> {
    return new Promise((resolve, reject) => {
      // if the request was already aborted, prevent doing extra work
      if (abortSignal?.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      // determine which http(s) client to use
      const isSSL = request.protocol === "https:";
      const queryString = buildQueryString(request.query || {});
      const nodeHttpsOptions: RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: queryString ? `${request.path}?${queryString}` : request.path,
        port: request.port,
        agent: isSSL ? this.httpsAgent : this.httpAgent,
      };

      // create the http request
      const requestFunc = isSSL ? hsRequest : hRequest;
      const req = requestFunc(nodeHttpsOptions, (res) => {
        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          headers: getTransformedHeaders(res.headers),
          body: res,
        });
        resolve({ response: httpResponse });
      });

      req.on("error", reject);

      // wire-up any timeout logic
      setConnectionTimeout(req, reject, this.connectionTimeout);
      setSocketTimeout(req, reject, this.socketTimeout);

      // wire-up abort logic
      if (abortSignal) {
        abortSignal.onabort = () => {
          // ensure request is destroyed
          req.abort();
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        };
      }

      writeRequestBody(req, request);
    });
  }
}
