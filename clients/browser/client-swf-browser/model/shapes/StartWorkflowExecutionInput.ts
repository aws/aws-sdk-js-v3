import { _WorkflowType } from "./_WorkflowType";
import { _TaskList } from "./_TaskList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartWorkflowExecutionInput: _Structure_ = {
  type: "structure",
  required: ["domain", "workflowId", "workflowType"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workflowType: {
      shape: _WorkflowType
    },
    taskList: {
      shape: _TaskList
    },
    taskPriority: {
      shape: {
        type: "string"
      }
    },
    input: {
      shape: {
        type: "string"
      }
    },
    executionStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    tagList: {
      shape: _TagList
    },
    taskStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    childPolicy: {
      shape: {
        type: "string"
      }
    },
    lambdaRole: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
