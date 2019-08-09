import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UpdateEnvironmentExceptionsUnion =
  | BadRequestException
  | ConflictException
  | NotFoundException
  | ForbiddenException
  | TooManyRequestsException
  | LimitExceededException
  | InternalServerErrorException;
