import { _CredentialList } from "./_CredentialList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutVoiceConnectorTerminationCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    },
    Credentials: {
      shape: _CredentialList
    }
  }
};
