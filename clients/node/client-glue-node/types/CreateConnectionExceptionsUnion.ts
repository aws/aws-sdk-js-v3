import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type CreateConnectionExceptionsUnion =
  | AlreadyExistsException
  | InvalidInputException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException
  | GlueEncryptionException;
