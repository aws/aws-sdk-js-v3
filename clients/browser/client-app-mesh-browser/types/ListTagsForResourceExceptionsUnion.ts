import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ListTagsForResourceExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException;
