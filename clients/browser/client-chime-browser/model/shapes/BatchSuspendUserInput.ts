import { _UserIdList } from "./_UserIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchSuspendUserInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UserIdList"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "accountId"
    },
    UserIdList: {
      shape: _UserIdList
    }
  }
};
