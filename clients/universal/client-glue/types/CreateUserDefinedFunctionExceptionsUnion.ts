import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type CreateUserDefinedFunctionExceptionsUnion =
  | AlreadyExistsException
  | InvalidInputException
  | InternalServiceException
  | EntityNotFoundException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | GlueEncryptionException;
