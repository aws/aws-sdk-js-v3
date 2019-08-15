import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnprocessedAccount: _Structure_ = {
  type: "structure",
  required: ["AccountId", "Result"],
  members: {
    AccountId: {
      shape: {
        type: "string",
        min: 12
      },
      locationName: "accountId"
    },
    Result: {
      shape: {
        type: "string"
      },
      locationName: "result"
    }
  }
};
