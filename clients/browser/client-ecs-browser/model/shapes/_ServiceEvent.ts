import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
