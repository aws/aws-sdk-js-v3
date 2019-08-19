import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { GlueEncryptionException } from "./GlueEncryptionException";
export type GetConnectionsExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException
  | InvalidInputException
  | GlueEncryptionException;
