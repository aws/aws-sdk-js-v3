import { _MessageList } from "./_MessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Statement: _Structure_ = {
  type: "structure",
  required: ["messages"],
  members: {
    messages: {
      shape: _MessageList
    },
    responseCard: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
