import { _Accounts } from "./_Accounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accounts: {
      shape: _Accounts
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
