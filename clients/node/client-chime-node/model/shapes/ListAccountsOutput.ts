import { _AccountList } from "./_AccountList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accounts: {
      shape: _AccountList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
