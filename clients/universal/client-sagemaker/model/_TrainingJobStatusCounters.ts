import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrainingJobStatusCounters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Completed: {
      shape: {
        type: "integer"
      }
    },
    InProgress: {
      shape: {
        type: "integer"
      }
    },
    RetryableError: {
      shape: {
        type: "integer"
      }
    },
    NonRetryableError: {
      shape: {
        type: "integer"
      }
    },
    Stopped: {
      shape: {
        type: "integer"
      }
    }
  }
};
