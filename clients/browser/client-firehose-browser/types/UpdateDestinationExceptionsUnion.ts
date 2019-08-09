import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateDestinationExceptionsUnion =
  | InvalidArgumentException
  | ResourceInUseException
  | ResourceNotFoundException
  | ConcurrentModificationException;
