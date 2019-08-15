import { UpdateImagePermissionsInput } from "../shapes/UpdateImagePermissionsInput";
import { UpdateImagePermissionsOutput } from "../shapes/UpdateImagePermissionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateImagePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateImagePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateImagePermissionsInput
  },
  output: {
    shape: UpdateImagePermissionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: LimitExceededException
    }
  ]
};
