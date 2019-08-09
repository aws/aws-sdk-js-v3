import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type DeleteApplicationExceptionsUnion =
  | ConcurrentModificationException
  | ResourceNotFoundException
  | ResourceInUseException
  | UnsupportedOperationException;
