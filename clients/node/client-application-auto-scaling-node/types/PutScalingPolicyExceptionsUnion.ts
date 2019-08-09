import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { FailedResourceAccessException } from "./FailedResourceAccessException";
import { InternalServiceException } from "./InternalServiceException";
export type PutScalingPolicyExceptionsUnion =
  | ValidationException
  | LimitExceededException
  | ObjectNotFoundException
  | ConcurrentUpdateException
  | FailedResourceAccessException
  | InternalServiceException;
