import { Structure as _Structure_ } from "@aws-sdk/types";

export const CloneReceiptRuleSetInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetName", "OriginalRuleSetName"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    OriginalRuleSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
