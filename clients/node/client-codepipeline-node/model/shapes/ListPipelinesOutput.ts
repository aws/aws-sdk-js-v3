import { _PipelineList } from "./_PipelineList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelines: {
      shape: _PipelineList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
