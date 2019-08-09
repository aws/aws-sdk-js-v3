import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteCustomMetadataExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | ProhibitedStateException
  | FailedDependencyException
  | ServiceUnavailableException;
