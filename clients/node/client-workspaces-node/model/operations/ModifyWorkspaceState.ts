import { ModifyWorkspaceStateInput } from "../shapes/ModifyWorkspaceStateInput";
import { ModifyWorkspaceStateOutput } from "../shapes/ModifyWorkspaceStateOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { InvalidResourceStateException } from "../shapes/InvalidResourceStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
