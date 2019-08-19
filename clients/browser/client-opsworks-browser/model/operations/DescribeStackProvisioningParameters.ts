import { DescribeStackProvisioningParametersInput } from "../shapes/DescribeStackProvisioningParametersInput";
import { DescribeStackProvisioningParametersOutput } from "../shapes/DescribeStackProvisioningParametersOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackProvisioningParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackProvisioningParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackProvisioningParametersInput
  },
  output: {
    shape: DescribeStackProvisioningParametersOutput
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
