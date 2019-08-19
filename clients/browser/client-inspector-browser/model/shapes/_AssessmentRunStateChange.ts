import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentRunStateChange: _Structure_ = {
  type: "structure",
  required: ["stateChangedAt", "state"],
  members: {
    stateChangedAt: {
      shape: {
        type: "timestamp"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    }
  }
};
