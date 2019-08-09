import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type DeregisterScalableTargetExceptionsUnion =
  | ValidationException
  | ObjectNotFoundException
  | ConcurrentUpdateException
  | InternalServiceException;
