import { _AutoScalingGroupNames } from "./_AutoScalingGroupNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingGroupNames: {
      shape: _AutoScalingGroupNames
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
