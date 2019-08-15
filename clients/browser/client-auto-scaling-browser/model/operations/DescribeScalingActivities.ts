import { DescribeScalingActivitiesInput } from "../shapes/DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "../shapes/DescribeScalingActivitiesOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
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
    shape: DescribeScalingActivitiesOutput,
    resultWrapper: "DescribeScalingActivitiesResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
