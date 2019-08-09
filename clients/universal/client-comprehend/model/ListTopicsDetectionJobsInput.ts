import { _TopicsDetectionJobFilter } from "./_TopicsDetectionJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTopicsDetectionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _TopicsDetectionJobFilter
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
