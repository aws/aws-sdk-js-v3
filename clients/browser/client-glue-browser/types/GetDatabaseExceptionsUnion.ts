import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetDatabaseExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | InternalServiceException
  | OperationTimeoutException
  | GlueEncryptionException;
