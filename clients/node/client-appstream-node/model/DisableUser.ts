import { DisableUserInput } from "./DisableUserInput";
import { DisableUserOutput } from "./DisableUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableUserInput
  },
  output: {
    shape: DisableUserOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
