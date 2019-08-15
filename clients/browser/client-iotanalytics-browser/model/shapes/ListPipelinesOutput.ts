import { _PipelineSummaries } from "./_PipelineSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineSummaries: {
      shape: _PipelineSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
