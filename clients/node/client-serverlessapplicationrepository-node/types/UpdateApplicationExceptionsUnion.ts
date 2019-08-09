import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type UpdateApplicationExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException
  | NotFoundException
  | TooManyRequestsException
  | ConflictException;
