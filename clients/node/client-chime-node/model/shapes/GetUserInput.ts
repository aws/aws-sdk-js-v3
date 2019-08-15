import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserInput: _Structure_ = {
  type: "structure",
  required: ["AccountId", "UserId"],
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
    }
  }
};
