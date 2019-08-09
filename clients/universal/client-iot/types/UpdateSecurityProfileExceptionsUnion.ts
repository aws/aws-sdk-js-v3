import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type UpdateSecurityProfileExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException;
