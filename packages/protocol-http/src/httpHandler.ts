import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { RequestHandler, HttpHandlerOptions } from "@aws-sdk/types";

export type HttpHandler = RequestHandler<
  HttpRequest,
  HttpResponse,
  HttpHandlerOptions
>;
