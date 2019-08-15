import { _HyperParameterTuningJobSummaries } from "./_HyperParameterTuningJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHyperParameterTuningJobsOutput: _Structure_ = {
  type: "structure",
  required: ["HyperParameterTuningJobSummaries"],
  members: {
    HyperParameterTuningJobSummaries: {
      shape: _HyperParameterTuningJobSummaries
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
