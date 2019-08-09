import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionOpenCounts: _Structure_ = {
  type: "structure",
  required: [
    "openActivityTasks",
    "openDecisionTasks",
    "openTimers",
    "openChildWorkflowExecutions"
  ],
  members: {
    openActivityTasks: {
      shape: {
        type: "integer"
      }
    },
    openDecisionTasks: {
      shape: {
        type: "integer"
      }
    },
    openTimers: {
      shape: {
        type: "integer"
      }
    },
    openChildWorkflowExecutions: {
      shape: {
        type: "integer"
      }
    },
    openLambdaFunctions: {
      shape: {
        type: "integer"
      }
    }
  }
};
