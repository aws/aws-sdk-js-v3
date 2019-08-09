import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { NoAssociatedRoleException } from "./NoAssociatedRoleException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DisassociateDRTLogBucketExceptionsUnion =
  | InternalErrorException
  | InvalidOperationException
  | NoAssociatedRoleException
  | AccessDeniedForDependencyException
  | OptimisticLockException
  | ResourceNotFoundException;
