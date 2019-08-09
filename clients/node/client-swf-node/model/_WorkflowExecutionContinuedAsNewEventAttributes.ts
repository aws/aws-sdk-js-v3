import { _TaskList } from "./_TaskList";
import { _TagList } from "./_TagList";
import { _WorkflowType } from "./_WorkflowType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionContinuedAsNewEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "decisionTaskCompletedEventId",
    "newExecutionRunId",
    "taskList",
    "childPolicy",
    "workflowType"
  ],
  members: {
    input: {
      shape: {
        type: "string"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    },
    newExecutionRunId: {
      shape: {
        type: "string",
        min: 1
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
    tagList: {
      shape: _TagList
    },
    workflowType: {
      shape: _WorkflowType
    },
    lambdaRole: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
