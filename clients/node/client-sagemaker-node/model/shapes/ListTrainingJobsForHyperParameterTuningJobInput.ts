import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTrainingJobsForHyperParameterTuningJobInput: _Structure_ = {
  type: "structure",
  required: ["HyperParameterTuningJobName"],
  members: {
    HyperParameterTuningJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StatusEquals: {
      shape: {
        type: "string"
      }
    },
    SortBy: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    }
  }
};
