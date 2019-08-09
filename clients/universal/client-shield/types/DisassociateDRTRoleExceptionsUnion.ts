import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DisassociateDRTRoleExceptionsUnion =
  | InternalErrorException
  | InvalidOperationException
  | OptimisticLockException
  | ResourceNotFoundException;
