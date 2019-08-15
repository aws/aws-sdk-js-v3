import { _DetailsMap } from "./_DetailsMap";
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
    thingName: {
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
    statusDetails: {
      shape: _DetailsMap
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
    approximateSecondsBeforeTimedOut: {
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
    },
    jobDocument: {
      shape: {
        type: "string"
      }
    }
  }
};
