import { DescribeDeploymentsInput } from "./DescribeDeploymentsInput";
import { DescribeDeploymentsOutput } from "./DescribeDeploymentsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
