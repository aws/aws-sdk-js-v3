import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
export type CreateSnapshotFromVolumeRecoveryPointExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError
  | ServiceUnavailableError;
