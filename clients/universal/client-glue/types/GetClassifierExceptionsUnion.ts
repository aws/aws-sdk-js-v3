import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetClassifierExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException;
