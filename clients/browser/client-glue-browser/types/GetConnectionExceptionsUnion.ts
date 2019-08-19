import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetConnectionExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException
  | InvalidInputException
  | GlueEncryptionException;
