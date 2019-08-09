import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidPasswordException } from "./InvalidPasswordException";
export type GetDocumentExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | InvalidArgumentException
  | FailedDependencyException
  | ServiceUnavailableException
  | InvalidPasswordException;
