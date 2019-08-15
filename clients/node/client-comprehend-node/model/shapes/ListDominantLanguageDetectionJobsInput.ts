import { _DominantLanguageDetectionJobFilter } from "./_DominantLanguageDetectionJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDominantLanguageDetectionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _DominantLanguageDetectionJobFilter
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
