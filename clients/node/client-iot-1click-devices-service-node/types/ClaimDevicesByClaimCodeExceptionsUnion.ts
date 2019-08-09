import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ForbiddenException } from "./ForbiddenException";
export type ClaimDevicesByClaimCodeExceptionsUnion =
  | InvalidRequestException
  | InternalFailureException
  | ForbiddenException;
