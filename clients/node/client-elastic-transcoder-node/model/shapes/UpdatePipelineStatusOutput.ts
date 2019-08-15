import { _Pipeline } from "./_Pipeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pipeline: {
      shape: _Pipeline
    }
  }
};
