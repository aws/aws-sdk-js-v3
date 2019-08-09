import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ThrottlingException } from "./ThrottlingException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { ResourceRegistrationFailureException } from "./ResourceRegistrationFailureException";
export type RegisterThingExceptionsUnion =
  | InternalFailureException
  | ServiceUnavailableException
  | InvalidRequestException
  | UnauthorizedException
  | ThrottlingException
  | ConflictingResourceUpdateException
  | ResourceRegistrationFailureException;
