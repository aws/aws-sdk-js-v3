import { ValidationException } from "./ValidationException";
import { FailedResourceAccessException } from "./FailedResourceAccessException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type DescribeScalingPoliciesExceptionsUnion =
  | ValidationException
  | FailedResourceAccessException
  | InvalidNextTokenException
  | ConcurrentUpdateException
  | InternalServiceException;
