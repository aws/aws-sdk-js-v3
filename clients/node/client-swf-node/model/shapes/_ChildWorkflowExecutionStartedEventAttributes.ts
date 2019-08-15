import { _WorkflowExecution } from "./_WorkflowExecution";
import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChildWorkflowExecutionStartedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowExecution", "workflowType", "initiatedEventId"],
  members: {
    workflowExecution: {
      shape: _WorkflowExecution
    },
    workflowType: {
      shape: _WorkflowType
    },
    initiatedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
