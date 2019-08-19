import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleHook: _Structure_ = {
  type: "structure",
  required: [],
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
    NotificationTargetARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
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
    GlobalTimeout: {
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
