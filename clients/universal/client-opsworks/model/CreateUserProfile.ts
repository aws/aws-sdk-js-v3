import { CreateUserProfileInput } from "./CreateUserProfileInput";
import { CreateUserProfileOutput } from "./CreateUserProfileOutput";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserProfileInput
  },
  output: {
    shape: CreateUserProfileOutput
  },
  errors: [
    {
      shape: ValidationException
    }
  ]
};
