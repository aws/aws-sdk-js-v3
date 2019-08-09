import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { VersionConflictException } from "./VersionConflictException";
export type DeleteSecurityProfileExceptionsUnion =
  | InvalidRequestException
  | ThrottlingException
  | InternalFailureException
  | VersionConflictException;
