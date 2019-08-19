import { DescribeScalingPlansInput } from "../shapes/DescribeScalingPlansInput";
import { DescribeScalingPlansOutput } from "../shapes/DescribeScalingPlansOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScalingPlans: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingPlans",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingPlansInput
  },
  output: {
    shape: DescribeScalingPlansOutput
  },
  errors: [
    {
      shape: ValidationException
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
