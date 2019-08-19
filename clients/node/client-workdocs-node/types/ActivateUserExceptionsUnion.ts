import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type ActivateUserExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
