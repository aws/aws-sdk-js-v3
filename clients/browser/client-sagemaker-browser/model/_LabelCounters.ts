import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelCounters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalLabeled: {
      shape: {
        type: "integer"
      }
    },
    HumanLabeled: {
      shape: {
        type: "integer"
      }
    },
    MachineLabeled: {
      shape: {
        type: "integer"
      }
    },
    FailedNonRetryableError: {
      shape: {
        type: "integer"
      }
    },
    Unlabeled: {
      shape: {
        type: "integer"
      }
    }
  }
};
