import { _UserEmailList } from "./_UserEmailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InviteUsersInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UserEmailList"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    UserEmailList: {
      shape: _UserEmailList
    }
  }
};
