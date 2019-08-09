import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetCatalogImportStatusExceptionsUnion =
  | InternalServiceException
  | OperationTimeoutException;
