import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type DeleteFilterExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
