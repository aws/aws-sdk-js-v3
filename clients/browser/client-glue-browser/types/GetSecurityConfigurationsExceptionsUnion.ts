import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetSecurityConfigurationsExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException;
