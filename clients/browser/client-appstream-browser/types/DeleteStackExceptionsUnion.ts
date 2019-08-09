import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteStackExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | ConcurrentModificationException;
