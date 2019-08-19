import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateMethodResponseExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | BadRequestException
  | TooManyRequestsException;
