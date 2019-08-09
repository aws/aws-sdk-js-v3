import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
export type BatchGetWorkflowsExceptionsUnion =
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException;
