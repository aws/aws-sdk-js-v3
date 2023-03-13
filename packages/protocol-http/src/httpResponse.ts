import { HeaderBag, HttpMessage, Response } from "@aws-sdk/types";

import { Fields } from "./Fields";
import { getHeadersProxy, headersToFields } from "./headersProxy";

export type HttpResponseOptions = Partial<HttpMessage> & {
  statusCode: number;
};

export type HttpResponseFromOptions = {
  status: number;
  reason?: string;
  fields?: Fields;
  body?: any;
};

export interface HttpResponse extends Response {
  status: number;
  reason?: string;
  fields: Fields;
  body: any;
}

export class HttpResponse implements Response {
  public status: number;
  public reason?: string;
  public fields: Fields;
  public body: any;

  /**
   * @deprecated Use {@link status}
   */
  public statusCode = -1;

  /**
   * @deprecated Use {@link fields}
   */
  public headers: HeaderBag = {};

  /**
   * @deprecated Use {@link HttpResponse.from}
   */
  constructor(options: HttpResponseOptions) {
    this.status = options.statusCode;
    this.fields = headersToFields(options.headers || {});
    this.body = options.body;
    // Deprecated properties are accessed using getters and setters.
    // Object.defineProperties is used so the properties are still considered
    // enumerable.
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const httpResponse = this;
    Object.defineProperties(httpResponse, {
      statusCode: {
        enumerable: true,
        get() {
          return httpResponse.status;
        },
        set(statusCode: number) {
          httpResponse.status = statusCode;
        },
      },
      headers: {
        enumerable: true,
        get() {
          return getHeadersProxy(httpResponse.fields);
        },
        set(headers: HeaderBag) {
          httpResponse.fields = headersToFields(headers);
        },
      },
    });
  }

  static from(options: HttpResponseFromOptions) {
    const response = new HttpResponse({ statusCode: options.status, body: options.body });
    response.reason = options.reason;
    // Constructor handles setting default values for fields.
    if (options.fields) {
      response.fields = options.fields;
    }
    return response;
  }

  static isInstance(response: unknown): response is HttpResponse {
    // determine if response is a valid HttpResponse
    if (!response) return false;
    const resp = response as any;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
}
