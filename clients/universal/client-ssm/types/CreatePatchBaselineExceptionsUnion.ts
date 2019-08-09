import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
export type CreatePatchBaselineExceptionsUnion =
  | IdempotentParameterMismatch
  | ResourceLimitExceededException
  | InternalServerError;
