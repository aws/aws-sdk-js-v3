import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteDomainNameExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException;
