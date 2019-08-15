import { _JobExecutionStatusDetails } from "./_JobExecutionStatusDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    forceCanceled: {
      shape: {
        type: "boolean"
      }
    },
    statusDetails: {
      shape: _JobExecutionStatusDetails
    },
    thingArn: {
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
    },
    versionNumber: {
      shape: {
        type: "integer"
      }
    },
    approximateSecondsBeforeTimedOut: {
      shape: {
        type: "integer"
      }
    }
  }
};
