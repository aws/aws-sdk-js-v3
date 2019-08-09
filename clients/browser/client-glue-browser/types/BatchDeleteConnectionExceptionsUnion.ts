import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type BatchDeleteConnectionExceptionsUnion =
  | InternalServiceException
  | OperationTimeoutException;
