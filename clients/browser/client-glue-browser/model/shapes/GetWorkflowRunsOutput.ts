import { _WorkflowRuns } from "./_WorkflowRuns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Runs: {
      shape: _WorkflowRuns
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
