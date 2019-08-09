import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type StartGatewayExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
