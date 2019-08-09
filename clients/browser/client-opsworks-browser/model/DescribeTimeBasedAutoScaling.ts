import { DescribeTimeBasedAutoScalingInput } from "./DescribeTimeBasedAutoScalingInput";
import { DescribeTimeBasedAutoScalingOutput } from "./DescribeTimeBasedAutoScalingOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
