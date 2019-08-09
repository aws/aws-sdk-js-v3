import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type UpdateTableExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | ConcurrentModificationException
  | ResourceNumberLimitExceededException
  | GlueEncryptionException;
