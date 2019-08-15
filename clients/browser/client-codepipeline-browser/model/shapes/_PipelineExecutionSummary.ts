import { _SourceRevisionList } from "./_SourceRevisionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineExecutionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    sourceRevisions: {
      shape: _SourceRevisionList
    }
  }
};
