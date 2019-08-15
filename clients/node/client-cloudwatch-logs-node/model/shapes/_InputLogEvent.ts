import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputLogEvent: _Structure_ = {
  type: "structure",
  required: ["timestamp", "message"],
  members: {
    timestamp: {
      shape: {
        type: "integer"
      }
    },
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
