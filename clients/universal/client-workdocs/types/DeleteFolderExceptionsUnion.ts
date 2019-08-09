import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteFolderExceptionsUnion =
  | EntityNotExistsException
  | ProhibitedStateException
  | ConflictingOperationException
  | ConcurrentModificationException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
