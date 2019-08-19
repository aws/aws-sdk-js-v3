import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetDomainNameExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException;
