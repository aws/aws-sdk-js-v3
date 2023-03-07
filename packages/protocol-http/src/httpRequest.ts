import { HeaderBag, QueryParameterBag, Request } from "@aws-sdk/types";

import { Fields } from "./Fields";
import { getHeadersProxy, headersToFields } from "./headersProxy";
import { getQueryProxy, queryToSearchParams } from "./queryProxy";

export interface HttpRequestOptions {
  method?: string;
  protocol?: string;
  hostname?: string;
  port?: number;
  path?: string;
  query?: QueryParameterBag;
  headers?: HeaderBag;
  body?: any;
}

export interface HttpRequestFromOptions {
  method?: string;
  destination?: URL;
  fields?: Fields;
  body?: any;
}

export interface HttpRequest extends Request {
  method: string;
  destination: URL;
  fields: Fields;
  body?: any;
}

export class HttpRequest implements Request {
  public method: string;
  public destination: URL;
  public fields: Fields;
  public body?: any;

  /**
   * @deprecated Use protocol in {@link destination}
   */
  public protocol = "https";

  /**
   * @deprecated Use hostname in {@link destination}
   */
  public hostname = "localhost";

  /**
   * @deprecated Use port in {@link destination}
   */
  public port?: number;

  /**
   * @deprecated Use pathname in {@link destination}
   */
  public path = "/";

  /**
   * @deprecated Use searchParams in {@link destination}
   */
  public query: QueryParameterBag = {};

  /**
   * @deprecated Use {@link fields}
   */
  public headers: HeaderBag = {};

  /**
   *
   * @deprecated Use {@link HttpRequest.from}
   */
  constructor(options: HttpRequestOptions) {
    this.method = options.method || "GET";
    this.destination = HttpRequest.getDefaultDestination(options);
    this.fields = headersToFields(options.headers || {});
    this.body = options.body;

    // Deprecated properties are accessed using getters and setters.
    // Object.defineProperty is used so the properties are still considered
    // enumerable.
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const httpRequest = this;
    Object.defineProperties(httpRequest, {
      protocol: {
        enumerable: true,
        get() {
          return httpRequest.destination.protocol;
        },
        set(protocol: string) {
          httpRequest.destination.protocol = protocol;
        },
      },
      hostname: {
        enumerable: true,
        get() {
          return httpRequest.destination.hostname;
        },
        set(hostname: string) {
          httpRequest.destination.hostname = hostname;
        },
      },
      port: {
        enumerable: true,
        get(): number | undefined {
          const port = httpRequest.destination.port;
          return port ? Number(port) : undefined;
        },
        set(port?: number) {
          httpRequest.destination.port = String(port);
        },
      },
      path: {
        enumerable: true,
        get() {
          return httpRequest.destination.pathname;
        },
        set(path: string) {
          httpRequest.destination.pathname = path;
        },
      },
      query: {
        enumerable: true,
        get() {
          return getQueryProxy(httpRequest.destination.searchParams);
        },
        set(query: QueryParameterBag) {
          const searchParams = queryToSearchParams(query || {});
          httpRequest.destination.search = searchParams.toString();
        },
      },
      headers: {
        enumerable: true,
        get() {
          return getHeadersProxy(httpRequest.fields);
        },
        set(headers: HeaderBag) {
          httpRequest.fields = headersToFields(headers);
        },
      },
    });
  }

  static from(options: HttpRequestFromOptions): HttpRequest {
    const request = new HttpRequest(options);
    // Constructor handles providing default values for destination and fields.
    if (options.destination) {
      request.destination = options.destination;
    }
    if (options.fields) {
      request.fields = options.fields;
    }
    return request;
  }

  static isInstance(request: unknown): request is HttpRequest {
    // determine if request is a valid httpRequest
    if (!request) return false;
    const req: any = request;
    return (
      "method" in req &&
      "protocol" in req &&
      "hostname" in req &&
      "path" in req &&
      typeof req["query"] === "object" &&
      typeof req["headers"] === "object"
    );
  }

  clone(): HttpRequest {
    return HttpRequest.from({
      ...this,
      destination: new URL(this.destination),
      fields: Fields.from(
        this.fields.getAll().map((field) => ({
          ...field,
          values: [...field.values],
        }))
      ),
    });
  }

  private static getDefaultDestination(options: HttpRequestOptions): URL {
    const protocol = options.protocol
      ? options.protocol.slice(-1) !== ":"
        ? `${options.protocol}:`
        : options.protocol
      : "https:";
    const hostname = options.hostname || "localhost";
    const port = options.port ? `:${String(options.port)}` : "";
    const path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
    const searchParams = queryToSearchParams(options.query || {});
    const url = new URL(`${protocol}//${hostname}${port}${path}`);
    // Set the `search` property directly, so we don't have to handle adding the '?'
    url.search = searchParams.toString();
    return url;
  }
}
