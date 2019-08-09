import { InvalidInputException } from "./InvalidInputException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type CreateDatabaseExceptionsUnion =
  | InvalidInputException
  | AlreadyExistsException
  | ResourceNumberLimitExceededException
  | InternalServiceException
  | OperationTimeoutException
  | GlueEncryptionException;
