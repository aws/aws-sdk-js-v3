import { DescribeScalingActivitiesInput } from "./DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "./DescribeScalingActivitiesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
