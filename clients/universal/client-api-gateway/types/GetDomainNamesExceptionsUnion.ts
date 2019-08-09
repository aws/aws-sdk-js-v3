import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetDomainNamesExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException;
