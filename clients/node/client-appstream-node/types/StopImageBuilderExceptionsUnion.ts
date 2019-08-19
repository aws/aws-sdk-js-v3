import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type StopImageBuilderExceptionsUnion =
  | ResourceNotFoundException
  | OperationNotPermittedException
  | ConcurrentModificationException;
