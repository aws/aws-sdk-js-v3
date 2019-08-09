import { _Termination } from "./_Termination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutVoiceConnectorTerminationInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId", "Termination"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    },
    Termination: {
      shape: _Termination
    }
  }
};
