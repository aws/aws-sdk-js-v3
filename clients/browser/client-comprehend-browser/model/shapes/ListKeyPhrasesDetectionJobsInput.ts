import { _KeyPhrasesDetectionJobFilter } from "./_KeyPhrasesDetectionJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListKeyPhrasesDetectionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _KeyPhrasesDetectionJobFilter
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
