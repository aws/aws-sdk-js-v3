import { _E164PhoneNumberList } from "./_E164PhoneNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociatePhoneNumbersFromVoiceConnectorInput: _Structure_ = {
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
    E164PhoneNumbers: {
      shape: _E164PhoneNumberList
    }
  }
};
