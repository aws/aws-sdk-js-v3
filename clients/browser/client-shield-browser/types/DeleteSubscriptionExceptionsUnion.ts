import { InternalErrorException } from "./InternalErrorException";
import { LockedSubscriptionException } from "./LockedSubscriptionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteSubscriptionExceptionsUnion =
  | InternalErrorException
  | LockedSubscriptionException
  | ResourceNotFoundException;
