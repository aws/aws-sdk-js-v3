import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleHookSpecification: _Structure_ = {
  type: "structure",
  required: ["LifecycleHookName", "LifecycleTransition"],
  members: {
    LifecycleHookName: {
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
    },
    NotificationTargetARN: {
      shape: {
        type: "string"
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
