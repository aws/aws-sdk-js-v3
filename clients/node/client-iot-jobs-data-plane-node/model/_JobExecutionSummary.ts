import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queuedAt: {
      shape: {
        type: "integer"
      }
    },
    startedAt: {
      shape: {
        type: "integer"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "integer"
      }
    },
    versionNumber: {
      shape: {
        type: "integer"
      }
    },
    executionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
