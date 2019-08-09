import { _KeyPhrasesDetectionJobPropertiesList } from "./_KeyPhrasesDetectionJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListKeyPhrasesDetectionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyPhrasesDetectionJobPropertiesList: {
      shape: _KeyPhrasesDetectionJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
