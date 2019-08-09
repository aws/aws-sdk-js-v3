import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReceiptRuleSetInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetName"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
