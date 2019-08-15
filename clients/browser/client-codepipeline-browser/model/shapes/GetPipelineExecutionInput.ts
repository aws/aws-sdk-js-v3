import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineExecutionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "pipelineExecutionId"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    }
  }
};
