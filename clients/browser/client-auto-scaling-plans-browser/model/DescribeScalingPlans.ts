import { DescribeScalingPlansInput } from "./DescribeScalingPlansInput";
import { DescribeScalingPlansOutput } from "./DescribeScalingPlansOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
