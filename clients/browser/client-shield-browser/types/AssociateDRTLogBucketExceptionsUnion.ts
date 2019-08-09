import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { NoAssociatedRoleException } from "./NoAssociatedRoleException";
import { LimitsExceededException } from "./LimitsExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type AssociateDRTLogBucketExceptionsUnion =
  | InternalErrorException
  | InvalidOperationException
  | NoAssociatedRoleException
  | LimitsExceededException
  | InvalidParameterException
  | AccessDeniedForDependencyException
  | OptimisticLockException
  | ResourceNotFoundException;
