import { DeregisterEcsClusterInput } from "../shapes/DeregisterEcsClusterInput";
import { DeregisterEcsClusterOutput } from "../shapes/DeregisterEcsClusterOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterEcsCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterEcsCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterEcsClusterInput
  },
  output: {
    shape: DeregisterEcsClusterOutput
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
