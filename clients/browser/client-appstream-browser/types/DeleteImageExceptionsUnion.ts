import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteImageExceptionsUnion =
  | ResourceInUseException
  | ResourceNotFoundException
  | OperationNotPermittedException
  | ConcurrentModificationException;
