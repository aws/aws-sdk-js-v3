import { DeleteUserProfileInput } from "../shapes/DeleteUserProfileInput";
import { DeleteUserProfileOutput } from "../shapes/DeleteUserProfileOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserProfileInput
  },
  output: {
    shape: DeleteUserProfileOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
