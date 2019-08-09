import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetFilterExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
