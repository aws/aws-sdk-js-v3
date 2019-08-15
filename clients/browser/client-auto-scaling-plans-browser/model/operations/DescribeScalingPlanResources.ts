import { DescribeScalingPlanResourcesInput } from "../shapes/DescribeScalingPlanResourcesInput";
import { DescribeScalingPlanResourcesOutput } from "../shapes/DescribeScalingPlanResourcesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScalingPlanResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingPlanResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingPlanResourcesInput
  },
  output: {
    shape: DescribeScalingPlanResourcesOutput
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
