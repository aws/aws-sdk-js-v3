import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitionState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    enabled: {
      shape: {
        type: "boolean"
      }
    },
    lastChangedBy: {
      shape: {
        type: "string"
      }
    },
    lastChangedAt: {
      shape: {
        type: "timestamp"
      }
    },
    disabledReason: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
