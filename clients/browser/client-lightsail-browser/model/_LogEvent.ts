import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
