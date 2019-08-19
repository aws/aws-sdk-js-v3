import { EntityNotExistsException } from "./EntityNotExistsException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { StorageLimitExceededException } from "./StorageLimitExceededException";
import { StorageLimitWillExceedException } from "./StorageLimitWillExceedException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DraftUploadOutOfSyncException } from "./DraftUploadOutOfSyncException";
import { ResourceAlreadyCheckedOutException } from "./ResourceAlreadyCheckedOutException";
export type InitiateDocumentVersionUploadExceptionsUnion =
  | EntityNotExistsException
  | EntityAlreadyExistsException
  | StorageLimitExceededException
  | StorageLimitWillExceedException
  | ProhibitedStateException
  | UnauthorizedOperationException
  | UnauthorizedResourceAccessException
  | FailedDependencyException
  | ServiceUnavailableException
  | DraftUploadOutOfSyncException
  | ResourceAlreadyCheckedOutException;
