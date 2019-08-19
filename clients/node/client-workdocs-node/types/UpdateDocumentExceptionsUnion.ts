import { EntityNotExistsException } from "./EntityNotExistsException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateDocumentExceptionsUnion =
  | EntityNotExistsException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ProhibitedStateException
  | ConflictingOperationException
  | ConcurrentModificationException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
