import { EntityNotExistsException } from "./EntityNotExistsException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateFolderExceptionsUnion =
  | EntityNotExistsException
  | EntityAlreadyExistsException
  | ProhibitedStateException
  | ConflictingOperationException
  | ConcurrentModificationException
  | LimitExceededException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
