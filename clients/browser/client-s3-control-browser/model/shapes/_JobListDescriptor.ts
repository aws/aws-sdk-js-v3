import { _JobProgressSummary } from "./_JobProgressSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobListDescriptor: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Operation: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "integer"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TerminationDate: {
      shape: {
        type: "timestamp"
      }
    },
    ProgressSummary: {
      shape: _JobProgressSummary
    }
  }
};
