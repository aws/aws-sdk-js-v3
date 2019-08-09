import { _Pipeline } from "./_Pipeline";
import { _Warnings } from "./_Warnings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReadPipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pipeline: {
      shape: _Pipeline
    },
    Warnings: {
      shape: _Warnings
    }
  }
};
