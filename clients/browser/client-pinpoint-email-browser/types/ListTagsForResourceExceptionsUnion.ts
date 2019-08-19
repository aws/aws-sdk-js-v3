import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListTagsForResourceExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException;
