import { DescribeScalingParametersInput } from "../shapes/DescribeScalingParametersInput";
import { DescribeScalingParametersOutput } from "../shapes/DescribeScalingParametersOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
