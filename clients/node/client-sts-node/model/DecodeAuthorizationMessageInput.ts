import { Structure as _Structure_ } from "@aws-sdk/types";

export const DecodeAuthorizationMessageInput: _Structure_ = {
  type: "structure",
  required: ["EncodedMessage"],
  members: {
    EncodedMessage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
