import { _SentimentDetectionJobPropertiesList } from "./_SentimentDetectionJobPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSentimentDetectionJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SentimentDetectionJobPropertiesList: {
      shape: _SentimentDetectionJobPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
