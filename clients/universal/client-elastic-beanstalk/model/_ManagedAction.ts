import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ManagedAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionId: {
      shape: {
        type: "string"
      }
    },
    ActionDescription: {
      shape: {
        type: "string"
      }
    },
    ActionType: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    WindowStartTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
