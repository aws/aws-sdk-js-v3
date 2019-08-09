import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type BatchCreatePartitionExceptionsUnion =
  | InvalidInputException
  | AlreadyExistsException
  | ResourceNumberLimitExceededException
  | InternalServiceException
  | EntityNotFoundException
  | OperationTimeoutException
  | GlueEncryptionException;
