import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputLogEvent: _Structure_ = {
  type: "structure",
  required: [],
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
    },
    ingestionTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
