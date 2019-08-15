import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionSignaledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["signalName"],
  members: {
    signalName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    input: {
      shape: {
        type: "string"
      }
    },
    externalWorkflowExecution: {
      shape: _WorkflowExecution
    },
    externalInitiatedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
