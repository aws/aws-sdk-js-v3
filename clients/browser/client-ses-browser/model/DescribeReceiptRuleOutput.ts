import { _ReceiptRule } from "./_ReceiptRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReceiptRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rule: {
      shape: _ReceiptRule
    }
  }
};
