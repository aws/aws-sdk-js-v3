import { _Activities } from "./_Activities";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingActivitiesOutput: _Structure_ = {
  type: "structure",
  required: ["Activities"],
  members: {
    Activities: {
      shape: _Activities
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
