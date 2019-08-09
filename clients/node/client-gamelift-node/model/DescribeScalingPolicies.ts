import { DescribeScalingPoliciesInput } from "./DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "./DescribeScalingPoliciesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
