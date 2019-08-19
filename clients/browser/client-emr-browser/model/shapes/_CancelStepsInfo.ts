import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelStepsInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StepId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
