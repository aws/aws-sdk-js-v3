import { _LifecycleEventList } from "./_LifecycleEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    instanceId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    lifecycleEvents: {
      shape: _LifecycleEventList
    },
    instanceType: {
      shape: {
        type: "string"
      }
    }
  }
};
