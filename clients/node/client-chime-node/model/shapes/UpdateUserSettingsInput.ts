import { _UserSettings } from "./_UserSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserSettingsInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UserId", "UserSettings"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    UserId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "userId"
    },
    UserSettings: {
      shape: _UserSettings
    }
  }
};
