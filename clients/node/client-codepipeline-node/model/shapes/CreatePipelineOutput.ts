import { _PipelineDeclaration } from "./_PipelineDeclaration";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipeline: {
      shape: _PipelineDeclaration
    },
    tags: {
      shape: _TagList
    }
  }
};
