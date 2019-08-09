import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetDatabasesExceptionsUnion =
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | GlueEncryptionException;
