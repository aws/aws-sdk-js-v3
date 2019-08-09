import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UntagResourceExceptionsUnion =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | TooManyRequestsException;
