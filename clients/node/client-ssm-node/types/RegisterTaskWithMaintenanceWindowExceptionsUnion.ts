import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { DoesNotExistException } from "./DoesNotExistException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { FeatureNotAvailableException } from "./FeatureNotAvailableException";
import { InternalServerError } from "./InternalServerError";
export type RegisterTaskWithMaintenanceWindowExceptionsUnion =
  | IdempotentParameterMismatch
  | DoesNotExistException
  | ResourceLimitExceededException
  | FeatureNotAvailableException
  | InternalServerError;
