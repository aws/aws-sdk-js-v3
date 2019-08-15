import { _WorkflowNames } from "./_WorkflowNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetWorkflowsInput: _Structure_ = {
  type: "structure",
  required: ["Names"],
  members: {
    Names: {
      shape: _WorkflowNames
    },
    IncludeGraph: {
      shape: {
        type: "boolean"
      }
    }
  }
};
