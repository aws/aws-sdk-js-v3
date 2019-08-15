import { _AutoScalingInstances } from "./_AutoScalingInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutoScalingInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingInstances: {
      shape: _AutoScalingInstances
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
