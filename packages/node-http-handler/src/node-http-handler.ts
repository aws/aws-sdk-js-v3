import * as https from "https";
import * as http from "http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpOptions, NodeHttpOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { setConnectionTimeout } from "./set-connection-timeout";
import { setSocketTimeout } from "./set-socket-timeout";
import { writeRequestBody } from "./write-request-body";
import { getTransformedHeaders } from "./get-transformed-headers";

export class NodeHttpHandler implements HttpHandler {
  private readonly httpAgent: http.Agent;
  private readonly httpsAgent: https.Agent;

  constructor(private readonly httpOptions: NodeHttpOptions = {}) {
    const { keepAlive = true } = httpOptions;
    this.httpAgent = new http.Agent({ keepAlive });
    this.httpsAgent = new https.Agent({ keepAlive });
  }

  destroy(): void {
    this.httpAgent.destroy();
    this.httpsAgent.destroy();
  }

  handle(
    request: HttpRequest,
    { abortSignal }: HttpOptions
  ): Promise<{ response: HttpResponse }> {
    return new Promise((resolve, reject) => {
      // if the request was already aborted, prevent doing extra work
      if (abortSignal && abortSignal.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      // determine which http(s) client to use
      const isSSL = request.protocol === "https:";
      const queryString = buildQueryString(request.query || {});
      const nodeHttpsOptions: https.RequestOptions = {
        headers: request.headers,
        host: request.hostname,
        method: request.method,
        path: queryString ? `${request.path}?${queryString}` : request.path,
        port: request.port,
        agent: isSSL ? this.httpsAgent : this.httpAgent
      };

      // create the http request
      const req = (isSSL ? https : http).request(nodeHttpsOptions, res => {
        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          headers: getTransformedHeaders(res.headers),
          body: res
        });
        resolve({ response: httpResponse });
      });

      req.on("error", reject);

      // wire-up any timeout logic
      setConnectionTimeout(req, reject, this.httpOptions.connectionTimeout);
      setSocketTimeout(req, reject, this.httpOptions.socketTimeout);

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
