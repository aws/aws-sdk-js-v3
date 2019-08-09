import { DescribeScalingActivitiesInput } from "./DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "./DescribeScalingActivitiesOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
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
