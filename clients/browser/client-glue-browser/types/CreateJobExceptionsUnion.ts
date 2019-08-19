import { InvalidInputException } from "./InvalidInputException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateJobExceptionsUnion =
  | InvalidInputException
  | IdempotentParameterMismatchException
  | AlreadyExistsException
  | InternalServiceException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | ConcurrentModificationException;
