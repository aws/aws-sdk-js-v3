import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
export type GetDevEndpointsExceptionsUnion =
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException;
