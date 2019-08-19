import { DescribeProvisioningParametersInput } from "../shapes/DescribeProvisioningParametersInput";
import { DescribeProvisioningParametersOutput } from "../shapes/DescribeProvisioningParametersOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProvisioningParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProvisioningParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProvisioningParametersInput
  },
  output: {
    shape: DescribeProvisioningParametersOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
