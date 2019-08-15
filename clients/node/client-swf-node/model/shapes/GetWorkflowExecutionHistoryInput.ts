import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowExecutionHistoryInput: _Structure_ = {
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
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    maximumPageSize: {
      shape: {
        type: "integer"
      }
    },
    reverseOrder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
