import { _TelephonySettings } from "./_TelephonySettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserSettings: _Structure_ = {
  type: "structure",
  required: ["Telephony"],
  members: {
    Telephony: {
      shape: _TelephonySettings
    }
  }
};
