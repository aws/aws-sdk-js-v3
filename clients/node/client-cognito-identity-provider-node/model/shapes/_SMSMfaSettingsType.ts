import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SMSMfaSettingsType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    PreferredMfa: {
      shape: {
        type: "boolean"
      }
    }
  }
};
