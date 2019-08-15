import { _TaskList } from "./_TaskList";
import { _WorkflowType } from "./_WorkflowType";
import { _TagList } from "./_TagList";
import { _WorkflowExecution } from "./_WorkflowExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionStartedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["childPolicy", "taskList", "workflowType"],
  members: {
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
    taskList: {
      shape: _TaskList
    },
    taskPriority: {
      shape: {
        type: "string"
      }
    },
    workflowType: {
      shape: _WorkflowType
    },
    tagList: {
      shape: _TagList
    },
    continuedExecutionRunId: {
      shape: {
        type: "string"
      }
    },
    parentWorkflowExecution: {
      shape: _WorkflowExecution
    },
    parentInitiatedEventId: {
      shape: {
        type: "integer"
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
