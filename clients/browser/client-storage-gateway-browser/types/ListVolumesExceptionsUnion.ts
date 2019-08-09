import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type ListVolumesExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
