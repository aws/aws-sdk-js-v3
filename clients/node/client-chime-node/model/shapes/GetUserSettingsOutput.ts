import { _UserSettings } from "./_UserSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserSettings: {
      shape: _UserSettings
    }
  }
};
