import { DeleteUserProfileInput } from "./DeleteUserProfileInput";
import { DeleteUserProfileOutput } from "./DeleteUserProfileOutput";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
    }
  ]
};
