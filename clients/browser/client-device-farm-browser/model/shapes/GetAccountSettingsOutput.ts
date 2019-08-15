import { _AccountSettings } from "./_AccountSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    accountSettings: {
      shape: _AccountSettings
    }
  }
};
