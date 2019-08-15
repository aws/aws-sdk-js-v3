import { _PipelineActivities } from "./_PipelineActivities";
import { _ReprocessingSummaries } from "./_ReprocessingSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Pipeline: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    activities: {
      shape: _PipelineActivities
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
