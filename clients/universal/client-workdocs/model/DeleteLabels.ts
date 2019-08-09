import { DeleteLabelsInput } from "./DeleteLabelsInput";
import { DeleteLabelsOutput } from "./DeleteLabelsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLabels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLabels",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/resources/{ResourceId}/labels"
  },
  input: {
    shape: DeleteLabelsInput
  },
  output: {
    shape: DeleteLabelsOutput
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
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
