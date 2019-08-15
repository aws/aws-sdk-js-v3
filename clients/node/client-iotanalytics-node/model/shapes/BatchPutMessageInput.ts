import { _Messages } from "./_Messages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchPutMessageInput: _Structure_ = {
  type: "structure",
  required: ["channelName", "messages"],
  members: {
    channelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    messages: {
      shape: _Messages
    }
  }
};
