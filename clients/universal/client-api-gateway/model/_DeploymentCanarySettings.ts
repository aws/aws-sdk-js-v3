import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentCanarySettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    percentTraffic: {
      shape: {
        type: "float"
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
