import { _BusinessCallingSettings } from "./_BusinessCallingSettings";
import { _VoiceConnectorSettings } from "./_VoiceConnectorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGlobalSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BusinessCalling: {
      shape: _BusinessCallingSettings
    },
    VoiceConnector: {
      shape: _VoiceConnectorSettings
    }
  }
};
