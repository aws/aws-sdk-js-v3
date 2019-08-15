import { DeleteImagePermissionsInput } from "../shapes/DeleteImagePermissionsInput";
import { DeleteImagePermissionsOutput } from "../shapes/DeleteImagePermissionsOutput";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteImagePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteImagePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteImagePermissionsInput
  },
  output: {
    shape: DeleteImagePermissionsOutput
  },
  errors: [
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
