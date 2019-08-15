import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowRunStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TotalActions: {
      shape: {
        type: "integer"
      }
    },
    TimeoutActions: {
      shape: {
        type: "integer"
      }
    },
    FailedActions: {
      shape: {
        type: "integer"
      }
    },
    StoppedActions: {
      shape: {
        type: "integer"
      }
    },
    SucceededActions: {
      shape: {
        type: "integer"
      }
    },
    RunningActions: {
      shape: {
        type: "integer"
      }
    }
  }
};
