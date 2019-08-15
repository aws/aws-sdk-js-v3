import { _WorkflowNames } from "./_WorkflowNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkflowsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Workflows: {
      shape: _WorkflowNames
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
