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
  constructor(options: HttpResponseOptions) {
    this.statusCode = options.statusCode;
    this.headers = options.headers || {};
    this.body = options.body;
  }
}
