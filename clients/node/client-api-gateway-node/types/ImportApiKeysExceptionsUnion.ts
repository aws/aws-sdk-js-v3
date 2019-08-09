import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
export type ImportApiKeysExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | BadRequestException
  | ConflictException;
