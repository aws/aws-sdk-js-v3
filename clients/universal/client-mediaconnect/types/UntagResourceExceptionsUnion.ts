import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type UntagResourceExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | InternalServerErrorException;
