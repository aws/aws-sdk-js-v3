import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
export type DeleteProjectExceptionsUnion =
  | InternalFailureException
  | ServiceUnavailableException
  | UnauthorizedException
  | TooManyRequestsException
  | NotFoundException;
