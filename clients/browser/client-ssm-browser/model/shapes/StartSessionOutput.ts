import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TokenValue: {
      shape: {
        type: "string"
      }
    },
    StreamUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
