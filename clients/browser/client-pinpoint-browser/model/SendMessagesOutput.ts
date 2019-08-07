import { _MessageResponse } from "./_MessageResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendMessagesOutput: _Structure_ = {
  type: "structure",
  required: ["MessageResponse"],
  members: {
    MessageResponse: {
      shape: _MessageResponse
    }
  },
  payload: "MessageResponse"
};
