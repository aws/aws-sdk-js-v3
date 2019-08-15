import { CreateUserProfileInput } from "../shapes/CreateUserProfileInput";
import { CreateUserProfileOutput } from "../shapes/CreateUserProfileOutput";
import { UserProfileAlreadyExistsException } from "../shapes/UserProfileAlreadyExistsException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: UserProfileAlreadyExistsException
    },
    {
      shape: ValidationException
    }
  ]
};
