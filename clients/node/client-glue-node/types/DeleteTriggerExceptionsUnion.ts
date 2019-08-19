import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type DeleteTriggerExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | ConcurrentModificationException;
