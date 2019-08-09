import { _ScalingPlans } from "./_ScalingPlans";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPlansOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalingPlans: {
      shape: _ScalingPlans
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
