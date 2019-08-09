import { _TargetGroupInfo } from "./_TargetGroupInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ECSTaskSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    identifer: {
      shape: {
        type: "string"
      }
    },
    desiredCount: {
      shape: {
        type: "integer"
      }
    },
    pendingCount: {
      shape: {
        type: "integer"
      }
    },
    runningCount: {
      shape: {
        type: "integer"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    trafficWeight: {
      shape: {
        type: "float"
      }
    },
    targetGroup: {
      shape: _TargetGroupInfo
    },
    taskSetLabel: {
      shape: {
        type: "string"
      }
    }
  }
};
