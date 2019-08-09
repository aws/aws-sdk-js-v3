import { AlreadyExistsException } from "./AlreadyExistsException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateTriggerExceptionsUnion =
  | AlreadyExistsException
  | EntityNotFoundException
  | InvalidInputException
  | IdempotentParameterMismatchException
  | InternalServiceException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | ConcurrentModificationException;
