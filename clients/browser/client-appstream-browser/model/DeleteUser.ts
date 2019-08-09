import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserInput
  },
  output: {
    shape: DeleteUserOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
