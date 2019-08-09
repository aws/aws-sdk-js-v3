import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
export type CreateApplicationVersionExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | InternalServerErrorException
  | ConflictException
  | ForbiddenException;
