import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type CreateIPSetExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
