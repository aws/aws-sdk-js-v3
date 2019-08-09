import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetWorkflowRunPropertiesExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException;
