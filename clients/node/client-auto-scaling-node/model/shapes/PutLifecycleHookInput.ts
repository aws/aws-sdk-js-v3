import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecycleHookInput: _Structure_ = {
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
    LifecycleTransition: {
      shape: {
        type: "string"
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationTargetARN: {
      shape: {
        type: "string"
      }
    },
    NotificationMetadata: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HeartbeatTimeout: {
      shape: {
        type: "integer"
      }
    },
    DefaultResult: {
      shape: {
        type: "string"
      }
    }
  }
};
