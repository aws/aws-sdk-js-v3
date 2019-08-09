import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteImageBuilderExceptionsUnion =
  | ResourceNotFoundException
  | OperationNotPermittedException
  | ConcurrentModificationException;
