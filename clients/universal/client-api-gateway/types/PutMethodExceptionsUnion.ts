import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type PutMethodExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | ConflictException
  | LimitExceededException
  | TooManyRequestsException;
