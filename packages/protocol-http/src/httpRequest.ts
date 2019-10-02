import { escapeUri } from "@aws-sdk/util-uri-escape";
import {
  HttpMessage,
  HttpEndpoint,
  QueryParameterBag,
  HeaderBag
} from "./http";

type HttpRequestOptions = Partial<HttpMessage> &
  Partial<HttpEndpoint> & { method?: string };

export class HttpRequest implements HttpMessage, HttpEndpoint {
  public method: string;
  public protocol: string;
  public hostname: string;
  public port?: number;
  public path: string;
  public query: QueryParameterBag;
  public headers: HeaderBag;
  public body?: any;
  private readonly isHttpRequest = true;

  constructor(options: HttpRequestOptions) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol
      ? options.protocol.substr(-1) !== ":"
        ? `${options.protocol}:`
        : options.protocol
      : "https:";
    this.path = options.path
      ? options.path.charAt(0) !== "/"
        ? `/${options.path}`
        : options.path
      : "/";
  }

  static isInstance(request: unknown): request is HttpRequest {
    return (
      request !== undefined && (request as HttpRequest).isHttpRequest === true
    );
  }

  getFormatedUrl(): string {
    let hostname = this.hostname;
    if (this.port) {
      hostname += `:${this.port}`;
    }
    let queryString = this.query ? this.buildQueryString() : "";
    if (queryString && queryString[0] !== "?") {
      queryString = `?${queryString}`;
    }
    return `${this.protocol}//${hostname}${this.path}${queryString}`;
  }

  private buildQueryString(): string {
    const parts: string[] = [];
    for (let key of Object.keys(this.query || {}).sort()) {
      const value = this.query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (let i = 0, iLen = value.length; i < iLen; i++) {
          parts.push(`${key}=${escapeUri(value[i])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }

    return parts.join("&");
  }
}
