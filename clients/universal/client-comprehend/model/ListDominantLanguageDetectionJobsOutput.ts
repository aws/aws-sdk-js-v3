import { _DominantLanguageDetectionJobPropertiesList } from "./_DominantLanguageDetectionJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDominantLanguageDetectionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DominantLanguageDetectionJobPropertiesList: {
      shape: _DominantLanguageDetectionJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
