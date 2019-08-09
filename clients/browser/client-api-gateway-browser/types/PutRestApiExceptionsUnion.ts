import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type PutRestApiExceptionsUnion =
  | UnauthorizedException
  | LimitExceededException
  | NotFoundException
  | BadRequestException
  | TooManyRequestsException
  | ConflictException;
