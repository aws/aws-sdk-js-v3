import { _ReceiptRuleSetMetadata } from "./_ReceiptRuleSetMetadata";
import { _ReceiptRulesList } from "./_ReceiptRulesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActiveReceiptRuleSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Metadata: {
      shape: _ReceiptRuleSetMetadata
    },
    Rules: {
      shape: _ReceiptRulesList
    }
  }
};
