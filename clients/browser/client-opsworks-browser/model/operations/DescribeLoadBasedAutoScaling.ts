import { DescribeLoadBasedAutoScalingInput } from "../shapes/DescribeLoadBasedAutoScalingInput";
import { DescribeLoadBasedAutoScalingOutput } from "../shapes/DescribeLoadBasedAutoScalingOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLoadBasedAutoScaling: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBasedAutoScaling",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBasedAutoScalingInput
  },
  output: {
    shape: DescribeLoadBasedAutoScalingOutput
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
