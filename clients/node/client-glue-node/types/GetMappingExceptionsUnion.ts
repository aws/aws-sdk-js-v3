import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { EntityNotFoundException } from "./EntityNotFoundException";
export type GetMappingExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | EntityNotFoundException;
