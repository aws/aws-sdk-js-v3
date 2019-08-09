import { DescribeScalingParametersInput } from "./DescribeScalingParametersInput";
import { DescribeScalingParametersOutput } from "./DescribeScalingParametersOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeScalingParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingParametersInput
  },
  output: {
    shape: DescribeScalingParametersOutput,
    resultWrapper: "DescribeScalingParametersResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
