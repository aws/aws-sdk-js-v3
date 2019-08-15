import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSetOperationSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    EndTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
