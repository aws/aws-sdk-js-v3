import { _MessageList } from "./_MessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Prompt: _Structure_ = {
  type: "structure",
  required: ["messages", "maxAttempts"],
  members: {
    messages: {
      shape: _MessageList
    },
    maxAttempts: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    responseCard: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
