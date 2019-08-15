import { _SMSMfaSettingsType } from "./_SMSMfaSettingsType";
import { _SoftwareTokenMfaSettingsType } from "./_SoftwareTokenMfaSettingsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminSetUserMFAPreferenceInput: _Structure_ = {
  type: "structure",
  required: ["Username", "UserPoolId"],
  members: {
    SMSMfaSettings: {
      shape: _SMSMfaSettingsType
    },
    SoftwareTokenMfaSettings: {
      shape: _SoftwareTokenMfaSettingsType
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
