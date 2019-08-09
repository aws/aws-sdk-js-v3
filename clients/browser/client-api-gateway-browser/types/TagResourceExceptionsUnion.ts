import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ConflictException } from "./ConflictException";
export type TagResourceExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | NotFoundException
  | LimitExceededException
  | ConflictException;
