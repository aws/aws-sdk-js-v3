import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionCancelRequestedEventAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    externalWorkflowExecution: {
      shape: _WorkflowExecution
    },
    externalInitiatedEventId: {
      shape: {
        type: "integer"
      }
    },
    cause: {
      shape: {
        type: "string"
      }
    }
  }
};
