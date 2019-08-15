import { DescribeScalingPoliciesInput } from "../shapes/DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "../shapes/DescribeScalingPoliciesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { FailedResourceAccessException } from "../shapes/FailedResourceAccessException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
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
      shape: ValidationException
    },
    {
      shape: FailedResourceAccessException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    }
  ]
};
