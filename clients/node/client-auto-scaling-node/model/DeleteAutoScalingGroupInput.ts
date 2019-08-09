import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAutoScalingGroupInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ForceDelete: {
      shape: {
        type: "boolean"
      }
    }
  }
};
