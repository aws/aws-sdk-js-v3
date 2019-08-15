import { InitiateDocumentVersionUploadInput } from "../shapes/InitiateDocumentVersionUploadInput";
import { InitiateDocumentVersionUploadOutput } from "../shapes/InitiateDocumentVersionUploadOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { StorageLimitExceededException } from "../shapes/StorageLimitExceededException";
import { StorageLimitWillExceedException } from "../shapes/StorageLimitWillExceedException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DraftUploadOutOfSyncException } from "../shapes/DraftUploadOutOfSyncException";
import { ResourceAlreadyCheckedOutException } from "../shapes/ResourceAlreadyCheckedOutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
