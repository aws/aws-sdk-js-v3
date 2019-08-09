import { _LifecycleEventList } from "./_LifecycleEventList";
import { _ECSTaskSetList } from "./_ECSTaskSetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ECSTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    targetId: {
      shape: {
        type: "string"
      }
    },
    targetArn: {
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
    status: {
      shape: {
        type: "string"
      }
    },
    taskSetsInfo: {
      shape: _ECSTaskSetList
    }
  }
};
