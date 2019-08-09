import { _TaskList } from "./_TaskList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContinueAsNewWorkflowExecutionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: [],
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
    workflowTypeVersion: {
      shape: {
        type: "string",
        min: 1
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
