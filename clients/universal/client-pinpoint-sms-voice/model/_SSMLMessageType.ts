import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SSMLMessageType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    Text: {
      shape: {
        type: "string"
      }
    },
    VoiceId: {
      shape: {
        type: "string"
      }
    }
  }
};
