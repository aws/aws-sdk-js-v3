import { DeleteCustomMetadataInput } from "./DeleteCustomMetadataInput";
import { DeleteCustomMetadataOutput } from "./DeleteCustomMetadataOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCustomMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCustomMetadata",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/resources/{ResourceId}/customMetadata"
  },
  input: {
    shape: DeleteCustomMetadataInput
  },
  output: {
    shape: DeleteCustomMetadataOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
