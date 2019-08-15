import { _TopicsDetectionJobPropertiesList } from "./_TopicsDetectionJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTopicsDetectionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TopicsDetectionJobPropertiesList: {
      shape: _TopicsDetectionJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
