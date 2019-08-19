import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
export type CreateUserExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | InternalServerErrorException
  | ConflictException
  | ForbiddenException;
