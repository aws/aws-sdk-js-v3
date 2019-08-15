import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowExecutionMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    messageId: {
      shape: {
        type: "string"
      }
    },
    eventType: {
      shape: {
        type: "string"
      }
    },
    timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    payload: {
      shape: {
        type: "string"
      }
    }
  }
};
