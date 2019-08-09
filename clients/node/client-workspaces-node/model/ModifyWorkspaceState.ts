import { ModifyWorkspaceStateInput } from "./ModifyWorkspaceStateInput";
import { ModifyWorkspaceStateOutput } from "./ModifyWorkspaceStateOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyWorkspaceState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyWorkspaceState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyWorkspaceStateInput
  },
  output: {
    shape: ModifyWorkspaceStateOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: InvalidResourceStateException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
