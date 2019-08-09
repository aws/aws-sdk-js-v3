import { InternalServiceException } from "./InternalServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetDataCatalogEncryptionSettingsExceptionsUnion =
  | InternalServiceException
  | InvalidInputException
  | OperationTimeoutException;
