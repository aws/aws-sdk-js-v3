import { SourceBundleDeletionException } from "./SourceBundleDeletionException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { OperationInProgressException } from "./OperationInProgressException";
import { S3LocationNotInServiceRegionException } from "./S3LocationNotInServiceRegionException";
export type DeleteApplicationVersionExceptionsUnion =
  | SourceBundleDeletionException
  | InsufficientPrivilegesException
  | OperationInProgressException
  | S3LocationNotInServiceRegionException;
