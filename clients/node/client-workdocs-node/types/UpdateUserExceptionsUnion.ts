import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { IllegalUserStateException } from "./IllegalUserStateException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DeactivatingLastSystemUserException } from "./DeactivatingLastSystemUserException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type UpdateUserExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | IllegalUserStateException
  | FailedDependencyException
  | ServiceUnavailableException
  | DeactivatingLastSystemUserException
  | InvalidArgumentException;
