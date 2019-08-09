import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyTagsException } from "./TooManyTagsException";
export type TagResourceExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyTagsException;
