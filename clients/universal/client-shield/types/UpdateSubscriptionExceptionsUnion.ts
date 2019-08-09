import { InternalErrorException } from "./InternalErrorException";
import { LockedSubscriptionException } from "./LockedSubscriptionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OptimisticLockException } from "./OptimisticLockException";
export type UpdateSubscriptionExceptionsUnion =
  | InternalErrorException
  | LockedSubscriptionException
  | ResourceNotFoundException
  | InvalidParameterException
  | OptimisticLockException;
