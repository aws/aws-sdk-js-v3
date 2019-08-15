import { DescribeScalingPoliciesInput } from "../shapes/DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "../shapes/DescribeScalingPoliciesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScalingPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingPoliciesInput
  },
  output: {
    shape: DescribeScalingPoliciesOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    }
  ]
};
