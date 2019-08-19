import { _EntitiesDetectionJobPropertiesList } from "./_EntitiesDetectionJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntitiesDetectionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntitiesDetectionJobPropertiesList: {
      shape: _EntitiesDetectionJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
