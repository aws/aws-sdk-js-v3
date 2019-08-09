import { InvalidRequestException } from "./InvalidRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InternalServerException } from "./InternalServerException";
export type TagResourceExceptionsUnion =
  | InvalidRequestException
  | ConcurrentModificationException
  | ResourceNotFoundException
  | TooManyTagsException
  | InternalServerException;
