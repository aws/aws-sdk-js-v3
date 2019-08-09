import { UpdateImagePermissionsInput } from "./UpdateImagePermissionsInput";
import { UpdateImagePermissionsOutput } from "./UpdateImagePermissionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
