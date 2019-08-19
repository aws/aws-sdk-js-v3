import { DescribeTimeBasedAutoScalingInput } from "../shapes/DescribeTimeBasedAutoScalingInput";
import { DescribeTimeBasedAutoScalingOutput } from "../shapes/DescribeTimeBasedAutoScalingOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTimeBasedAutoScaling: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTimeBasedAutoScaling",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTimeBasedAutoScalingInput
  },
  output: {
    shape: DescribeTimeBasedAutoScalingOutput
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
