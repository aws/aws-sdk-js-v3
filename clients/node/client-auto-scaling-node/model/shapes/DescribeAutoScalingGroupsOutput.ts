import { _AutoScalingGroups } from "./_AutoScalingGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutoScalingGroupsOutput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroups"],
  members: {
    AutoScalingGroups: {
      shape: _AutoScalingGroups
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
