import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
export type CreateConfigurationExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ConflictException
  | ForbiddenException;
