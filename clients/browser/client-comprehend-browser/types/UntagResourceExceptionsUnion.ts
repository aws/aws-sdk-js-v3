import { TooManyTagKeysException } from "./TooManyTagKeysException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
export type UntagResourceExceptionsUnion =
  | TooManyTagKeysException
  | InvalidRequestException
  | ConcurrentModificationException
  | ResourceNotFoundException
  | InternalServerException;
