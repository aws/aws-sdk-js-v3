import { DescribeScalableTargetsInput } from "../shapes/DescribeScalableTargetsInput";
import { DescribeScalableTargetsOutput } from "../shapes/DescribeScalableTargetsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScalableTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalableTargets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalableTargetsInput
  },
  output: {
    shape: DescribeScalableTargetsOutput
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
