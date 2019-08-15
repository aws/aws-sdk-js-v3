import { DeleteLabelsInput } from "../shapes/DeleteLabelsInput";
import { DeleteLabelsOutput } from "../shapes/DeleteLabelsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
