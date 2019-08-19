import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetTriggersExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException;
