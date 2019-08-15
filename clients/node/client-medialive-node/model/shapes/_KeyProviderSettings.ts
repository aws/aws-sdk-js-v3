import { _StaticKeySettings } from "./_StaticKeySettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyProviderSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StaticKeySettings: {
      shape: _StaticKeySettings,
      locationName: "staticKeySettings"
    }
  }
};
