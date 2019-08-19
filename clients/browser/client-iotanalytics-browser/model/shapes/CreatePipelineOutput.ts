import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineArn: {
      shape: {
        type: "string"
      }
    }
  }
};
