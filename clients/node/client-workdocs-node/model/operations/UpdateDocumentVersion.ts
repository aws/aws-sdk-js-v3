import { UpdateDocumentVersionInput } from "../shapes/UpdateDocumentVersionInput";
import { UpdateDocumentVersionOutput } from "../shapes/UpdateDocumentVersionOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
