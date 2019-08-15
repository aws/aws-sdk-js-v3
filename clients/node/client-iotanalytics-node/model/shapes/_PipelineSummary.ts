import { _ReprocessingSummaries } from "./_ReprocessingSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    reprocessingSummaries: {
      shape: _ReprocessingSummaries
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
    }
  }
};
