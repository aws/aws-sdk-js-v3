import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type DetachVolumeExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
