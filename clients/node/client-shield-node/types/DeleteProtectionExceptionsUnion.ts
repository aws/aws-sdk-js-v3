import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OptimisticLockException } from "./OptimisticLockException";
export type DeleteProtectionExceptionsUnion =
  | InternalErrorException
  | ResourceNotFoundException
  | OptimisticLockException;
