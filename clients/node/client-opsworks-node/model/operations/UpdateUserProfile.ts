import { UpdateUserProfileInput } from "../shapes/UpdateUserProfileInput";
import { UpdateUserProfileOutput } from "../shapes/UpdateUserProfileOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserProfileInput
  },
  output: {
    shape: UpdateUserProfileOutput
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
