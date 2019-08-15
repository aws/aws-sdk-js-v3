import { _MemberAccounts } from "./_MemberAccounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMemberAccountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    memberAccounts: {
      shape: _MemberAccounts
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
