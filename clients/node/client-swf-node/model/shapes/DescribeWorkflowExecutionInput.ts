import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkflowExecutionInput: _Structure_ = {
  type: "structure",
  required: ["domain", "execution"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    execution: {
      shape: _WorkflowExecution
    }
  }
};
