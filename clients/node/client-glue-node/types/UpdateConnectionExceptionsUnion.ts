import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type UpdateConnectionExceptionsUnion =
  | InvalidInputException
  | EntityNotFoundException
  | OperationTimeoutException
  | GlueEncryptionException;
