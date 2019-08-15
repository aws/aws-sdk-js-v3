import { AbortDocumentVersionUploadInput } from "../shapes/AbortDocumentVersionUploadInput";
import { AbortDocumentVersionUploadOutput } from "../shapes/AbortDocumentVersionUploadOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
