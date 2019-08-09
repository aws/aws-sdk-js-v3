import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UntagResourceExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
