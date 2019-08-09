import { _MessageList } from "./_MessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReceiveMessageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Messages: {
      shape: _MessageList
    }
  }
};
