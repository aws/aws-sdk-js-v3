import { DescribeScalingPlanResourcesInput } from "./DescribeScalingPlanResourcesInput";
import { DescribeScalingPlanResourcesOutput } from "./DescribeScalingPlanResourcesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
