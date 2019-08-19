import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type DeleteConnectionExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException;
