import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DocumentLockedForCommentsException } from "./DocumentLockedForCommentsException";
import { InvalidCommentOperationException } from "./InvalidCommentOperationException";
export type CreateCommentExceptionsUnion =
  | EntityNotExistsException
  | ProhibitedStateException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException
  | DocumentLockedForCommentsException
  | InvalidCommentOperationException;
