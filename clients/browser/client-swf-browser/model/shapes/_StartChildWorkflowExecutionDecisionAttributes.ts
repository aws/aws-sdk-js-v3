import { _WorkflowType } from "./_WorkflowType";
import { _TaskList } from "./_TaskList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartChildWorkflowExecutionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["workflowType", "workflowId"],
  members: {
    workflowType: {
      shape: _WorkflowType
    },
    workflowId: {
      shape: {
        type: "string",
        min: 1
      }
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
    lambdaRole: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
