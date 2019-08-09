import { _DatasetTriggers } from "./_DatasetTriggers";
import { _DatasetActionSummaries } from "./_DatasetActionSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    datasetName: {
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
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    triggers: {
      shape: _DatasetTriggers
    },
    actions: {
      shape: _DatasetActionSummaries
    }
  }
};
