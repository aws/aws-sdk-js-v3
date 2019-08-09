import { _PartnerEventSourceAccountList } from "./_PartnerEventSourceAccountList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPartnerEventSourceAccountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PartnerEventSourceAccounts: {
      shape: _PartnerEventSourceAccountList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
