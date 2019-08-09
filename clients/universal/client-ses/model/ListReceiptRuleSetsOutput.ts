import { _ReceiptRuleSetsLists } from "./_ReceiptRuleSetsLists";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReceiptRuleSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleSets: {
      shape: _ReceiptRuleSetsLists
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
