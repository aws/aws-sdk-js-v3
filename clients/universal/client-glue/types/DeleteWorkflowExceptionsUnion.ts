import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteWorkflowExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | ConcurrentModificationException;
