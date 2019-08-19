import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type UpdateTriggerExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | EntityNotFoundException
  | OperationTimeoutException
  | ConcurrentModificationException;
