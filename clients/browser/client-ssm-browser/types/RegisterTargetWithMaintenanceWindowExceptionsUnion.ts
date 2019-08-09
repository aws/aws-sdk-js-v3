import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { DoesNotExistException } from "./DoesNotExistException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type RegisterTargetWithMaintenanceWindowExceptionsUnion =
  | IdempotentParameterMismatch
  | DoesNotExistException
  | ResourceLimitExceededException
  | InternalServerError;
