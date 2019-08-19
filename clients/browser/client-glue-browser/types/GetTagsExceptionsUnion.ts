import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { EntityNotFoundException } from "./EntityNotFoundException";
export type GetTagsExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | EntityNotFoundException;
