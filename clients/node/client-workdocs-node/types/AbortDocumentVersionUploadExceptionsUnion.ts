import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type AbortDocumentVersionUploadExceptionsUnion =
  | EntityNotExistsException
  | ProhibitedStateException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException;
