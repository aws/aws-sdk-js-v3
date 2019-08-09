import { _WorkflowType } from "./_WorkflowType";
import { _TaskList } from "./_TaskList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartChildWorkflowExecutionInitiatedEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "workflowId",
    "workflowType",
    "taskList",
    "decisionTaskCompletedEventId",
    "childPolicy"
  ],
  members: {
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workflowType: {
      shape: _WorkflowType
    },
    control: {
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
    taskList: {
      shape: _TaskList
    },
    taskPriority: {
      shape: {
        type: "string"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    },
    childPolicy: {
      shape: {
        type: "string"
      }
    },
    taskStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    tagList: {
      shape: _TagList
    },
    lambdaRole: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
