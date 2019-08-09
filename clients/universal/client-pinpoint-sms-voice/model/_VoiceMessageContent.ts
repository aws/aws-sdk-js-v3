import { _CallInstructionsMessageType } from "./_CallInstructionsMessageType";
import { _PlainTextMessageType } from "./_PlainTextMessageType";
import { _SSMLMessageType } from "./_SSMLMessageType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VoiceMessageContent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CallInstructionsMessage: {
      shape: _CallInstructionsMessageType
    },
    PlainTextMessage: {
      shape: _PlainTextMessageType
    },
    SSMLMessage: {
      shape: _SSMLMessageType
    }
  }
};
