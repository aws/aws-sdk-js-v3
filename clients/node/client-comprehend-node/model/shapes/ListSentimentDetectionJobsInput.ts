import { _SentimentDetectionJobFilter } from "./_SentimentDetectionJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSentimentDetectionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _SentimentDetectionJobFilter
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
