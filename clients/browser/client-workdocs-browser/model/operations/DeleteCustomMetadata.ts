import { DeleteCustomMetadataInput } from "../shapes/DeleteCustomMetadataInput";
import { DeleteCustomMetadataOutput } from "../shapes/DeleteCustomMetadataOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
