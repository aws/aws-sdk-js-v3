import * as https from "https";
import * as http from "http";
import { Readable } from "stream";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HeaderBag, HttpOptions, NodeHttpOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { setConnectionTimeout } from "./set-connection-timeout";
import { setSocketTimeout } from "./set-socket-timeout";
import { writeRequestBody } from "./write-request-body";

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
    options: HttpOptions
  ): Promise<{ response: HttpResponse }> {
    // determine which http(s) client to use
    const isSSL = request.protocol === "https:";
    const httpClient = isSSL ? https : http;

    let path = request.path;
    if (request.query) {
      const queryString = buildQueryString(request.query);
      if (queryString) {
        path += `?${queryString}`;
      }
    }

    const nodeHttpsOptions: https.RequestOptions = {
      headers: request.headers,
      host: request.hostname,
      method: request.method,
      path: path,
      port: request.port,
      agent: isSSL ? this.httpsAgent : this.httpAgent
    };

    return new Promise((resolve, reject) => {
      const abortSignal = options && options.abortSignal;
      const { connectionTimeout, socketTimeout } = this.httpOptions;

      // if the request was already aborted, prevent doing extra work
      if (abortSignal && abortSignal.aborted) {
        const abortError = new Error("Request aborted");
        abortError.name = "AbortError";
        reject(abortError);
        return;
      }

      // create the http request
      const req = (httpClient as typeof http).request(nodeHttpsOptions, res => {
        const httpHeaders = res.headers;
        const transformedHeaders: HeaderBag = {};

        for (let name of Object.keys(httpHeaders)) {
          let headerValues = <string>httpHeaders[name];
          transformedHeaders[name] = Array.isArray(headerValues)
            ? headerValues.join(",")
            : headerValues;
        }

        const httpResponse = new HttpResponse({
          statusCode: res.statusCode || -1,
          headers: transformedHeaders,
          body: res
        });
        resolve({ response: httpResponse });
      });

      req.on("error", reject);

      // wire-up any timeout logic
      setConnectionTimeout(req, reject, connectionTimeout);
      setSocketTimeout(req, reject, socketTimeout);

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
