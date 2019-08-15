import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string"
      }
    }
  }
};
