import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReviewActionDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ActionName: {
      shape: {
        type: "string"
      }
    },
    TargetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CompleteTime: {
      shape: {
        type: "timestamp"
      }
    },
    Result: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    }
  }
};
