import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateDomainNameExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | ConflictException
  | TooManyRequestsException;
