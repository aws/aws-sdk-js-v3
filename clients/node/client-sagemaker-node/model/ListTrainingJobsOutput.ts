import { _TrainingJobSummaries } from "./_TrainingJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrainingJobsOutput: _Structure_ = {
  type: "structure",
  required: ["TrainingJobSummaries"],
  members: {
    TrainingJobSummaries: {
      shape: _TrainingJobSummaries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
