import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionConfiguration: _Structure_ = {
  type: "structure",
  required: [
    "taskStartToCloseTimeout",
    "executionStartToCloseTimeout",
    "taskList",
    "childPolicy"
  ],
  members: {
    taskStartToCloseTimeout: {
      shape: {
        type: "string",
        min: 1
      }
    },
    executionStartToCloseTimeout: {
      shape: {
        type: "string",
        min: 1
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
