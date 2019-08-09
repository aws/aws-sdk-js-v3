import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type CreateFilterExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
