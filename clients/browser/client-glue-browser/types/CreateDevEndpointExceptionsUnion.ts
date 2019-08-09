import { AccessDeniedException } from "./AccessDeniedException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { ValidationException } from "./ValidationException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
export type CreateDevEndpointExceptionsUnion =
  | AccessDeniedException
  | AlreadyExistsException
  | IdempotentParameterMismatchException
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException
  | ValidationException
  | ResourceNumberLimitExceededException;
