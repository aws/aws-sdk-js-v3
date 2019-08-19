import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type UpdateUsageExceptionsUnion =
  | UnauthorizedException
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
