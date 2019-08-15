import { Structure as _Structure_ } from "@aws-sdk/types";

export const RetryStageExecutionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "stageName", "pipelineExecutionId", "retryMode"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    },
    retryMode: {
      shape: {
        type: "string"
      }
    }
  }
};
