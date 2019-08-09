import { SetVisibleToAllUsersInput } from "./SetVisibleToAllUsersInput";
import { SetVisibleToAllUsersOutput } from "./SetVisibleToAllUsersOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
