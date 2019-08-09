import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteFleetExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | ConcurrentModificationException;
