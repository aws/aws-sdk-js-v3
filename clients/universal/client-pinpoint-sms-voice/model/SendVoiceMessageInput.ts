import { _VoiceMessageContent } from "./_VoiceMessageContent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendVoiceMessageInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CallerId: {
      shape: {
        type: "string"
      }
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: _VoiceMessageContent
    },
    DestinationPhoneNumber: {
      shape: {
        type: "string"
      }
    },
    OriginationPhoneNumber: {
      shape: {
        type: "string"
      }
    }
  }
};
