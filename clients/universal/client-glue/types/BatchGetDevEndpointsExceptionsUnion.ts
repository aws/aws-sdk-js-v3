import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
export type BatchGetDevEndpointsExceptionsUnion =
  | AccessDeniedException
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException;
