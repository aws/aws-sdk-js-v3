import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InternalServiceException } from "./InternalServiceException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type BatchGetPartitionExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | OperationTimeoutException
  | InternalServiceException
  | GlueEncryptionException;
