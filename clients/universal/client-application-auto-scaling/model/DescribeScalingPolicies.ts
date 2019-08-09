import { DescribeScalingPoliciesInput } from "./DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "./DescribeScalingPoliciesOutput";
import { ValidationException } from "./ValidationException";
import { FailedResourceAccessException } from "./FailedResourceAccessException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
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
