import { DescribeProvisioningParametersInput } from "./DescribeProvisioningParametersInput";
import { DescribeProvisioningParametersOutput } from "./DescribeProvisioningParametersOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
