import { _Messages } from "./_Messages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchPutMessageInput: _Structure_ = {
  type: "structure",
  required: ["messages"],
  members: {
    messages: {
      shape: _Messages
    }
  }
};
