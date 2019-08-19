import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InternalServiceException } from "./InternalServiceException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetPartitionsExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | OperationTimeoutException
  | InternalServiceException
  | GlueEncryptionException;
