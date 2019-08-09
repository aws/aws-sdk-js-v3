import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { CustomMetadataLimitExceededException } from "./CustomMetadataLimitExceededException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type CreateCustomMetadataExceptionsUnion =
  | EntityNotExistsException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | ProhibitedStateException
  | CustomMetadataLimitExceededException
  | FailedDependencyException
  | ServiceUnavailableException;
