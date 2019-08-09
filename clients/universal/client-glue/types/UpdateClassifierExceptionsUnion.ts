import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type UpdateClassifierExceptionsUnion =
  | InvalidInputException
  | VersionMismatchException
  | EntityNotFoundException
  | OperationTimeoutException;
