import { UpdateDocumentVersionInput } from "./UpdateDocumentVersionInput";
import { UpdateDocumentVersionOutput } from "./UpdateDocumentVersionOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidOperationException } from "./InvalidOperationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDocumentVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocumentVersion",
  http: {
    method: "PATCH",
    requestUri: "/api/v1/documents/{DocumentId}/versions/{VersionId}"
  },
  input: {
    shape: UpdateDocumentVersionInput
  },
  output: {
    shape: UpdateDocumentVersionOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidOperationException
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
