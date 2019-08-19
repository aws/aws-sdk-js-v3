import { DescribeDeploymentsInput } from "../shapes/DescribeDeploymentsInput";
import { DescribeDeploymentsOutput } from "../shapes/DescribeDeploymentsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDeployments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDeployments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDeploymentsInput
  },
  output: {
    shape: DescribeDeploymentsOutput
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
