import { InternalServiceException } from "./InternalServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type PutDataCatalogEncryptionSettingsExceptionsUnion =
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException;
