import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetTableVersionsExceptionsUnion =
  | EntityNotFoundException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | GlueEncryptionException;
