import { DescribeScalableTargetsInput } from "./DescribeScalableTargetsInput";
import { DescribeScalableTargetsOutput } from "./DescribeScalableTargetsOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
