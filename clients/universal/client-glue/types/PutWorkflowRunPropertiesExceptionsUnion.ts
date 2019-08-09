import { AlreadyExistsException } from "./AlreadyExistsException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type PutWorkflowRunPropertiesExceptionsUnion =
  | AlreadyExistsException
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | ConcurrentModificationException;
