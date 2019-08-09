import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type ResetCacheExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
