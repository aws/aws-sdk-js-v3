import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { RequestHandler, HttpOptions } from "@aws-sdk/types";

export type HttpHandler = RequestHandler<
  HttpRequest,
  HttpResponse,
  HttpOptions
>;
