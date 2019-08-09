import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UntagResourceExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException;
