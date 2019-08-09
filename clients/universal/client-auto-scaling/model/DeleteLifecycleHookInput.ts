import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLifecycleHookInput: _Structure_ = {
  type: "structure",
  required: ["LifecycleHookName", "AutoScalingGroupName"],
  members: {
    LifecycleHookName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
