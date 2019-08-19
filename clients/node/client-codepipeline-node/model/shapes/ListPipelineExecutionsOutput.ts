import { _PipelineExecutionSummaryList } from "./_PipelineExecutionSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelineExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineExecutionSummaries: {
      shape: _PipelineExecutionSummaryList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
