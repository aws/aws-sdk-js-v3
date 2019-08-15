import { UpdateMyUserProfileInput } from "../shapes/UpdateMyUserProfileInput";
import { UpdateMyUserProfileOutput } from "../shapes/UpdateMyUserProfileOutput";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
