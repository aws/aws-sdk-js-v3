import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type DeleteScalingPolicyExceptionsUnion =
  | ValidationException
  | ObjectNotFoundException
  | ConcurrentUpdateException
  | InternalServiceException;
