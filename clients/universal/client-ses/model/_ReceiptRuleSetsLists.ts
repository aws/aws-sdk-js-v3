import { List as _List_ } from "@aws-sdk/types";
import { _ReceiptRuleSetMetadata } from "./_ReceiptRuleSetMetadata";

export const _ReceiptRuleSetsLists: _List_ = {
  type: "list",
  member: {
    shape: _ReceiptRuleSetMetadata
  }
};
