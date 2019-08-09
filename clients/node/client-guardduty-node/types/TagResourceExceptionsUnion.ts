import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type TagResourceExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
