import { DescribeStackProvisioningParametersInput } from "./DescribeStackProvisioningParametersInput";
import { DescribeStackProvisioningParametersOutput } from "./DescribeStackProvisioningParametersOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
