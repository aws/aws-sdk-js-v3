import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CanarySettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    percentTraffic: {
      shape: {
        type: "float"
      }
    },
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    stageVariableOverrides: {
      shape: _MapOfStringToString
    },
    useStageCache: {
      shape: {
        type: "boolean"
      }
    }
  }
};
