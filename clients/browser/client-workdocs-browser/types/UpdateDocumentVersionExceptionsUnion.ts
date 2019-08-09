import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidOperationException } from "./InvalidOperationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type UpdateDocumentVersionExceptionsUnion =
  | EntityNotExistsException
  | ProhibitedStateException
  | ConcurrentModificationException
  | InvalidOperationException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
