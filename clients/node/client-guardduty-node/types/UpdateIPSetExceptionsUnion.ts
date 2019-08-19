import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UpdateIPSetExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
