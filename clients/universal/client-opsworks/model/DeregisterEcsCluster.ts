import { DeregisterEcsClusterInput } from "./DeregisterEcsClusterInput";
import { DeregisterEcsClusterOutput } from "./DeregisterEcsClusterOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
