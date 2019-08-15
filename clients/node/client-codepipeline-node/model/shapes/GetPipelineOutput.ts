import { _PipelineDeclaration } from "./_PipelineDeclaration";
import { _PipelineMetadata } from "./_PipelineMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipeline: {
      shape: _PipelineDeclaration
    },
    metadata: {
      shape: _PipelineMetadata
    }
  }
};
