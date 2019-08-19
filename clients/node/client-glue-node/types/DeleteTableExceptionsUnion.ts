import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type DeleteTableExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException;
