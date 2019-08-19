import { _DatasetContentStatus } from "./_DatasetContentStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetContentSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    version: {
      shape: {
        type: "string",
        min: 7
      }
    },
    status: {
      shape: _DatasetContentStatus
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    scheduleTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
