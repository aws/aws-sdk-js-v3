import { _HyperParameterTrainingJobSummaries } from "./_HyperParameterTrainingJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrainingJobsForHyperParameterTuningJobOutput: _Structure_ = {
  type: "structure",
  required: ["TrainingJobSummaries"],
  members: {
    TrainingJobSummaries: {
      shape: _HyperParameterTrainingJobSummaries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
