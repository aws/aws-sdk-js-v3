import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    queuedAt: {
      shape: {
        type: "timestamp"
      }
    },
    startedAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    executionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
