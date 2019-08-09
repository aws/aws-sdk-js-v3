import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { VersionConflictException } from "./VersionConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteThingExceptionsUnion =
  | ResourceNotFoundException
  | VersionConflictException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
