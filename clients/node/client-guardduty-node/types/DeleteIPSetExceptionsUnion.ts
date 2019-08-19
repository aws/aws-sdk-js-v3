import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DeleteIPSetExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
