import { SetVisibleToAllUsersInput } from "../shapes/SetVisibleToAllUsersInput";
import { SetVisibleToAllUsersOutput } from "../shapes/SetVisibleToAllUsersOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetVisibleToAllUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetVisibleToAllUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetVisibleToAllUsersInput
  },
  output: {
    shape: SetVisibleToAllUsersOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
