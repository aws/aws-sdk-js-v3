import { _Workflows } from "./_Workflows";
import { _WorkflowNames } from "./_WorkflowNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetWorkflowsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Workflows: {
      shape: _Workflows
    },
    MissingWorkflows: {
      shape: _WorkflowNames
    }
  }
};
