import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type GetTagsExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | NotFoundException
  | LimitExceededException;
