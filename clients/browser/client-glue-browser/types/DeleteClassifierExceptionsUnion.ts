import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type DeleteClassifierExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException;
