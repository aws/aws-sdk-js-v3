import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type RemoveResourcePermissionExceptionsUnion =
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
