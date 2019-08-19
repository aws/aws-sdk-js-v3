import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateAccountExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException;
