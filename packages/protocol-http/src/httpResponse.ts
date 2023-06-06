import { HeaderBag, HttpMessage, HttpResponse as IHttpResponse } from "@aws-sdk/types";

type HttpResponseOptions = Partial<HttpMessage> & {
  statusCode: number;
  reason?: string;
};

export interface HttpResponse extends IHttpResponse {}

export class HttpResponse {
  public statusCode: number;
  public reason?: string;
  public headers: HeaderBag;
  public body?: any;

  constructor(options: HttpResponseOptions) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }

  static isInstance(response: unknown): response is HttpResponse {
    //determine if response is a valid HttpResponse
    if (!response) return false;
    const resp = response as any;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
}
