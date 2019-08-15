import { _Origination } from "./_Origination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutVoiceConnectorOriginationInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId", "Origination"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    },
    Origination: {
      shape: _Origination
    }
  }
};
