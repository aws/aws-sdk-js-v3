import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVoiceConnectorOriginationInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    }
  }
};
