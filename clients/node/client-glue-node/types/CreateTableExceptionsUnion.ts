import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type CreateTableExceptionsUnion =
  | AlreadyExistsException
  | InvalidInputException
  | EntityNotFoundException
  | ResourceNumberLimitExceededException
  | InternalServiceException
  | OperationTimeoutException
  | GlueEncryptionException;
