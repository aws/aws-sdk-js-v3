import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { TransferHandler, HttpOptions } from "@aws-sdk/types";

export type HttpHandler = TransferHandler<
  HttpRequest,
  HttpResponse,
  HttpOptions
>;
