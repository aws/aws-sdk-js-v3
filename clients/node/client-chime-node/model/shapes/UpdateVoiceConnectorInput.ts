import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVoiceConnectorInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId", "Name", "RequireEncryption"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RequireEncryption: {
      shape: {
        type: "boolean"
      }
    }
  }
};
