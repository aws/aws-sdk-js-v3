import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type DescribeCacheExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
