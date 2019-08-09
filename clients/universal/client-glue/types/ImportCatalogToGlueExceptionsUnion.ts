import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type ImportCatalogToGlueExceptionsUnion =
  | InternalServiceException
  | OperationTimeoutException;
