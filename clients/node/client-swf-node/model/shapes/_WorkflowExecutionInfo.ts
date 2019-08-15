import { _WorkflowExecution } from "./_WorkflowExecution";
import { _WorkflowType } from "./_WorkflowType";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionInfo: _Structure_ = {
  type: "structure",
  required: ["execution", "workflowType", "startTimestamp", "executionStatus"],
  members: {
    execution: {
      shape: _WorkflowExecution
    },
    workflowType: {
      shape: _WorkflowType
    },
    startTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    closeTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    executionStatus: {
      shape: {
        type: "string"
      }
    },
    closeStatus: {
      shape: {
        type: "string"
      }
    },
    parent: {
      shape: _WorkflowExecution
    },
    tagList: {
      shape: _TagList
    },
    cancelRequested: {
      shape: {
        type: "boolean"
      }
    }
  }
};
