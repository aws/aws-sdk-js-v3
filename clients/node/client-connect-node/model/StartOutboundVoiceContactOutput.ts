import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartOutboundVoiceContactOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContactId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
