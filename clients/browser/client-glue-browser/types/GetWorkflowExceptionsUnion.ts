import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetWorkflowExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException;
