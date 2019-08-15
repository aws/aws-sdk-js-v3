import { _MFAOptionListType } from "./_MFAOptionListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetUserSettingsInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken", "MFAOptions"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    MFAOptions: {
      shape: _MFAOptionListType
    }
  }
};
