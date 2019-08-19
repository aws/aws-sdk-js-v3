import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProgressCounters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalSteps: {
      shape: {
        type: "integer"
      }
    },
    SuccessSteps: {
      shape: {
        type: "integer"
      }
    },
    FailedSteps: {
      shape: {
        type: "integer"
      }
    },
    CancelledSteps: {
      shape: {
        type: "integer"
      }
    },
    TimedOutSteps: {
      shape: {
        type: "integer"
      }
    }
  }
};
