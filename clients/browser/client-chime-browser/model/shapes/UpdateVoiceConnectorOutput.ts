import { _VoiceConnector } from "./_VoiceConnector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVoiceConnectorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VoiceConnector: {
      shape: _VoiceConnector
    }
  }
};
