import { RegisterEcsClusterInput } from "../shapes/RegisterEcsClusterInput";
import { RegisterEcsClusterOutput } from "../shapes/RegisterEcsClusterOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
