import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ManagedActionHistoryItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionId: {
      shape: {
        type: "string"
      }
    },
    ActionType: {
      shape: {
        type: "string"
      }
    },
    ActionDescription: {
      shape: {
        type: "string"
      }
    },
    FailureType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    FailureDescription: {
      shape: {
        type: "string"
      }
    },
    ExecutedTime: {
      shape: {
        type: "timestamp"
      }
    },
    FinishedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
