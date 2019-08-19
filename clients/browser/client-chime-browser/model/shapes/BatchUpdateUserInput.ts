import { _UpdateUserRequestItemList } from "./_UpdateUserRequestItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdateUserInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UpdateUserRequestItems"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    UpdateUserRequestItems: {
      shape: _UpdateUserRequestItemList
    }
  }
};
