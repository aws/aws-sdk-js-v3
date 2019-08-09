import { _EntitiesDetectionJobFilter } from "./_EntitiesDetectionJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntitiesDetectionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _EntitiesDetectionJobFilter
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
