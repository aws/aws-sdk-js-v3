import { DescribeScalingActivitiesInput } from "../shapes/DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "../shapes/DescribeScalingActivitiesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScalingActivities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScalingActivities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScalingActivitiesInput
  },
  output: {
    shape: DescribeScalingActivitiesOutput
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
