import { RegisterEcsClusterInput } from "./RegisterEcsClusterInput";
import { RegisterEcsClusterOutput } from "./RegisterEcsClusterOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterEcsCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterEcsCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterEcsClusterInput
  },
  output: {
    shape: RegisterEcsClusterOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
