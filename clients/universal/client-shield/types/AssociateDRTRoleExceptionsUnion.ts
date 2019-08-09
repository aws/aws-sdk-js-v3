import { InternalErrorException } from "./InternalErrorException";
import { InvalidOperationException } from "./InvalidOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AccessDeniedForDependencyException } from "./AccessDeniedForDependencyException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type AssociateDRTRoleExceptionsUnion =
  | InternalErrorException
  | InvalidOperationException
  | InvalidParameterException
  | AccessDeniedForDependencyException
  | OptimisticLockException
  | ResourceNotFoundException;
