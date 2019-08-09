import { List as _List_ } from "@aws-sdk/types";
import { _ReceiptRule } from "./_ReceiptRule";

export const _ReceiptRulesList: _List_ = {
  type: "list",
  member: {
    shape: _ReceiptRule
  }
};
