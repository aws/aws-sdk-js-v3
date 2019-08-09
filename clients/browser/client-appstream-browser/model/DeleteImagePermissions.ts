import { DeleteImagePermissionsInput } from "./DeleteImagePermissionsInput";
import { DeleteImagePermissionsOutput } from "./DeleteImagePermissionsOutput";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
