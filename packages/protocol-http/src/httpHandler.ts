import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { TransferHandler, HttpHandlerOptions } from "@aws-sdk/types";

export type HttpHandler = TransferHandler<
  HttpRequest,
  HttpResponse,
  HttpHandlerOptions
>;
