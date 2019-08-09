import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountDetail: _Structure_ = {
  type: "structure",
  required: ["AccountId", "Email"],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      },
      locationName: "accountId"
    },
    Email: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "email"
    }
  }
};
