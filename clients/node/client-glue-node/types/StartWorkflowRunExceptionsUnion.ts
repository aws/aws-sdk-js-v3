import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "./ConcurrentRunsExceededException";
export type StartWorkflowRunExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | ConcurrentRunsExceededException;
