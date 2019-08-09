import { InitiateDocumentVersionUploadInput } from "./InitiateDocumentVersionUploadInput";
import { InitiateDocumentVersionUploadOutput } from "./InitiateDocumentVersionUploadOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const InitiateDocumentVersionUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateDocumentVersionUpload",
  http: {
    method: "POST",
    requestUri: "/api/v1/documents"
  },
  input: {
    shape: InitiateDocumentVersionUploadInput
  },
  output: {
    shape: InitiateDocumentVersionUploadOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: StorageLimitExceededException
    },
    {
      shape: StorageLimitWillExceedException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: DraftUploadOutOfSyncException
    },
    {
      shape: ResourceAlreadyCheckedOutException
    }
  ]
};
