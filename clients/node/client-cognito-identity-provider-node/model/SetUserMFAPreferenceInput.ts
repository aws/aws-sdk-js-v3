import { _SMSMfaSettingsType } from "./_SMSMfaSettingsType";
import { _SoftwareTokenMfaSettingsType } from "./_SoftwareTokenMfaSettingsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetUserMFAPreferenceInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken"],
  members: {
    SMSMfaSettings: {
      shape: _SMSMfaSettingsType
    },
    SoftwareTokenMfaSettings: {
      shape: _SoftwareTokenMfaSettingsType
    },
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
