import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type CancelArchivalExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
