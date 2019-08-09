import { _ScalingActivities } from "./_ScalingActivities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingActivitiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingActivities: {
      shape: _ScalingActivities
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
