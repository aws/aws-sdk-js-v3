import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteScheduledActionInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "ScheduledActionName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
