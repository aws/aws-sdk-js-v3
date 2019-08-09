import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "./ConcurrentRunsExceededException";
export type StartTriggerExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | EntityNotFoundException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | ConcurrentRunsExceededException;
