import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { AccountActionRequiredException } from "./AccountActionRequiredException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateProjectExceptionsUnion =
  | InternalFailureException
  | ServiceUnavailableException
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException
  | AccountActionRequiredException
  | LimitExceededException;
