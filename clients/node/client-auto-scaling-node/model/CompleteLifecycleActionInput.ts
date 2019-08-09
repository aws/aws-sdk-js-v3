import { Structure as _Structure_ } from "@aws-sdk/types";

export const CompleteLifecycleActionInput: _Structure_ = {
  type: "structure",
  required: [
    "LifecycleHookName",
    "AutoScalingGroupName",
    "LifecycleActionResult"
  ],
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
    LifecycleActionResult: {
      shape: {
        type: "string"
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
