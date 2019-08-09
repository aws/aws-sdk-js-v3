import { _WorkflowRun } from "./_WorkflowRun";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Run: {
      shape: _WorkflowRun
    }
  }
};
