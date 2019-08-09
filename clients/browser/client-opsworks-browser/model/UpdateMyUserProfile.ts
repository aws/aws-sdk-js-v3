import { UpdateMyUserProfileInput } from "./UpdateMyUserProfileInput";
import { UpdateMyUserProfileOutput } from "./UpdateMyUserProfileOutput";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateMyUserProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMyUserProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMyUserProfileInput
  },
  output: {
    shape: UpdateMyUserProfileOutput
  },
  errors: [
    {
      shape: ValidationException
    }
  ]
};
