import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ServiceUnavailableError } from "./ServiceUnavailableError";
export type ExecuteSqlExceptionsUnion =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableError;
