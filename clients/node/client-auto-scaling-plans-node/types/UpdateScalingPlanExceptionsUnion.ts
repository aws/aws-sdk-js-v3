import { ValidationException } from "./ValidationException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
export type UpdateScalingPlanExceptionsUnion =
  | ValidationException
  | ConcurrentUpdateException
  | InternalServiceException
  | ObjectNotFoundException;
