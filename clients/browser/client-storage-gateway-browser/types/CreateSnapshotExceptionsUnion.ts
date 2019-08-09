import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
export type CreateSnapshotExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError
  | ServiceUnavailableError;
