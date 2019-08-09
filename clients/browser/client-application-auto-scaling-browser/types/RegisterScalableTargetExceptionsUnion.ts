import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type RegisterScalableTargetExceptionsUnion =
  | ValidationException
  | LimitExceededException
  | ConcurrentUpdateException
  | InternalServiceException;
