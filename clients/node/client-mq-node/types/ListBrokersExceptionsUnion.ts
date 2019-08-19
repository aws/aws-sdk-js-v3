import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type ListBrokersExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException;
