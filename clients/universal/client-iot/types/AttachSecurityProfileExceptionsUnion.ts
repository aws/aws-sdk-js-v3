import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
export type AttachSecurityProfileExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | LimitExceededException
  | VersionConflictException
  | ThrottlingException
  | InternalFailureException;
