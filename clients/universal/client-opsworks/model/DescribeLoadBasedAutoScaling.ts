import { DescribeLoadBasedAutoScalingInput } from "./DescribeLoadBasedAutoScalingInput";
import { DescribeLoadBasedAutoScalingOutput } from "./DescribeLoadBasedAutoScalingOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
