import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    totalChecks: {
      shape: {
        type: "integer"
      }
    },
    inProgressChecks: {
      shape: {
        type: "integer"
      }
    },
    waitingForDataCollectionChecks: {
      shape: {
        type: "integer"
      }
    },
    compliantChecks: {
      shape: {
        type: "integer"
      }
    },
    nonCompliantChecks: {
      shape: {
        type: "integer"
      }
    },
    failedChecks: {
      shape: {
        type: "integer"
      }
    },
    canceledChecks: {
      shape: {
        type: "integer"
      }
    }
  }
};
