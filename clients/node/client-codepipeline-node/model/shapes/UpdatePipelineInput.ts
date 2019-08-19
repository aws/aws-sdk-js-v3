import { _PipelineDeclaration } from "./_PipelineDeclaration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["pipeline"],
  members: {
    pipeline: {
      shape: _PipelineDeclaration
    }
  }
};
