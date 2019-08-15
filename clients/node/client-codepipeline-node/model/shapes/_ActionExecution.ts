import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    summary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    lastStatusChange: {
      shape: {
        type: "timestamp"
      }
    },
    token: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedBy: {
      shape: {
        type: "string"
      }
    },
    externalExecutionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    externalExecutionUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    percentComplete: {
      shape: {
        type: "integer"
      }
    },
    errorDetails: {
      shape: _ErrorDetails
    }
  }
};
