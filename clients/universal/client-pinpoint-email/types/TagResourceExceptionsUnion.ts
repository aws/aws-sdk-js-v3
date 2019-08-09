import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type TagResourceExceptionsUnion =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException;
