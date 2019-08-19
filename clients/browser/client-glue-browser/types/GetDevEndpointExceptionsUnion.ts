import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
export type GetDevEndpointExceptionsUnion =
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException
  | InvalidInputException;
