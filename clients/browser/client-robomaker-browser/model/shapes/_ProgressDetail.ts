import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProgressDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    currentProgress: {
      shape: {
        type: "string"
      }
    },
    percentDone: {
      shape: {
        type: "float"
      }
    },
    estimatedTimeRemainingSeconds: {
      shape: {
        type: "integer"
      }
    },
    targetResource: {
      shape: {
        type: "string"
      }
    }
  }
};
