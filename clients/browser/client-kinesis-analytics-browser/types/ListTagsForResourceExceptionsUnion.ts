import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ConcurrentModificationException;
