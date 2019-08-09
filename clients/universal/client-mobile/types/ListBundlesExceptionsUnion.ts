import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type ListBundlesExceptionsUnion =
  | InternalFailureException
  | ServiceUnavailableException
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException;
