import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExternalWorkflowExecutionSignaledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowExecution", "initiatedEventId"],
  members: {
    workflowExecution: {
      shape: _WorkflowExecution
    },
    initiatedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
