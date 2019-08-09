import { UpdateUserProfileInput } from "./UpdateUserProfileInput";
import { UpdateUserProfileOutput } from "./UpdateUserProfileOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
