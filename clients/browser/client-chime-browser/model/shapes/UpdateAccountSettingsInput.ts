import { _AccountSettings } from "./_AccountSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAccountSettingsInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "AccountSettings"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    AccountSettings: {
      shape: _AccountSettings
    }
  }
};
