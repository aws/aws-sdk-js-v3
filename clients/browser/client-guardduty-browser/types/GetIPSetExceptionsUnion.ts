import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetIPSetExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
