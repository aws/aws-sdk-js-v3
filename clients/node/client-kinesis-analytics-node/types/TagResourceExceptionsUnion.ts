import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type TagResourceExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | TooManyTagsException
  | InvalidArgumentException
  | ConcurrentModificationException;
