import { _TraceSummaryList } from "./_TraceSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTraceSummariesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TraceSummaries: {
      shape: _TraceSummaryList
    },
    ApproximateTime: {
      shape: {
        type: "timestamp"
      }
    },
    TracesProcessedCount: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
