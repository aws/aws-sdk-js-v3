import { AbortDocumentVersionUploadInput } from "./AbortDocumentVersionUploadInput";
import { AbortDocumentVersionUploadOutput } from "./AbortDocumentVersionUploadOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AbortDocumentVersionUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AbortDocumentVersionUpload",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/documents/{DocumentId}/versions/{VersionId}"
  },
  input: {
    shape: AbortDocumentVersionUploadInput
  },
  output: {
    shape: AbortDocumentVersionUploadOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
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
    }
  ]
};
