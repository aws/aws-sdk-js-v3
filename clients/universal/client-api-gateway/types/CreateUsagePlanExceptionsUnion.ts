import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
export type CreateUsagePlanExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | LimitExceededException
  | ConflictException
  | NotFoundException;
