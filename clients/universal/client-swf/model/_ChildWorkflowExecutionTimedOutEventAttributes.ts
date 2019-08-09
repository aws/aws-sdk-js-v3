import { _WorkflowExecution } from "./_WorkflowExecution";
import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChildWorkflowExecutionTimedOutEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "workflowExecution",
    "workflowType",
    "timeoutType",
    "initiatedEventId",
    "startedEventId"
  ],
  members: {
    workflowExecution: {
      shape: _WorkflowExecution
    },
    workflowType: {
      shape: _WorkflowType
    },
    timeoutType: {
      shape: {
        type: "string"
      }
    },
    initiatedEventId: {
      shape: {
        type: "integer"
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
