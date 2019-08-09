import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type ListTapesExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
