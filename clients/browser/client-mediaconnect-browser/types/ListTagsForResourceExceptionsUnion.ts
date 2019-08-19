import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListTagsForResourceExceptionsUnion =
  | NotFoundException
  | BadRequestException
  | InternalServerErrorException;
