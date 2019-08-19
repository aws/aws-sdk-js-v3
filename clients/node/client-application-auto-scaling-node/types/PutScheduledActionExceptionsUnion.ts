import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
export type PutScheduledActionExceptionsUnion =
  | ValidationException
  | LimitExceededException
  | ObjectNotFoundException
  | ConcurrentUpdateException
  | InternalServiceException;
