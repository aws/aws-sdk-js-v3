import { _Pipeline } from "./_Pipeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipeline: {
      shape: _Pipeline
    }
  }
};
