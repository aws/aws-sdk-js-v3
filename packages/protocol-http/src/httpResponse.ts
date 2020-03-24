import {
  HttpMessage,
  HttpEndpoint,
  QueryParameterBag,
  HeaderBag
} from "./http";

type HttpResponseOptions = Partial<HttpMessage> & {
  statusCode: number;
};

export class HttpResponse {
  public statusCode: number;
  public headers: HeaderBag;
  public body?: any;
  private readonly isHttpResponse = true;

  constructor(options: HttpResponseOptions) {
    this.statusCode = options.statusCode;
    this.headers = options.headers || {};
    this.body = options.body;
  }

  static isInstance(request: unknown): request is HttpResponse {
    return (
      request !== undefined && (request as HttpResponse).isHttpResponse === true
    );
  }
}
