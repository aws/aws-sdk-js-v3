import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeactivateUserExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
