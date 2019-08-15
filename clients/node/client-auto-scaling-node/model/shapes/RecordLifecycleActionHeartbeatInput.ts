import { Structure as _Structure_ } from "@aws-sdk/types";

export const RecordLifecycleActionHeartbeatInput: _Structure_ = {
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
    },
    LifecycleActionToken: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
