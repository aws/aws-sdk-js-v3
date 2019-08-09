import { _SamplingStrategy } from "./_SamplingStrategy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTraceSummariesInput: _Structure_ = {
  type: "structure",
  required: ["StartTime", "EndTime"],
  members: {
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    TimeRangeType: {
      shape: {
        type: "string"
      }
    },
    Sampling: {
      shape: {
        type: "boolean"
      }
    },
    SamplingStrategy: {
      shape: _SamplingStrategy
    },
    FilterExpression: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
