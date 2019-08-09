import { _MemberAccounts } from "./_MemberAccounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMemberAccountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MemberAccounts: {
      shape: _MemberAccounts
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
