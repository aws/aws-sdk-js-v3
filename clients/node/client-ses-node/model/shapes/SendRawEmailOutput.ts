import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendRawEmailOutput: _Structure_ = {
  type: "structure",
  required: ["MessageId"],
  members: {
    MessageId: {
      shape: {
        type: "string"
      }
    }
  }
};
