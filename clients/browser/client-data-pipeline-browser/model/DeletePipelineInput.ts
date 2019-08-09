import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePipelineInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
