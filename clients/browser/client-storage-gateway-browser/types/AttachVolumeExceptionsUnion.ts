import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type AttachVolumeExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
