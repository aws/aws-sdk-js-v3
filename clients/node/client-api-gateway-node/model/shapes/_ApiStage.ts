import { _MapOfApiStageThrottleSettings } from "./_MapOfApiStageThrottleSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApiStage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    apiId: {
      shape: {
        type: "string"
      }
    },
    stage: {
      shape: {
        type: "string"
      }
    },
    throttle: {
      shape: _MapOfApiStageThrottleSettings
    }
  }
};
