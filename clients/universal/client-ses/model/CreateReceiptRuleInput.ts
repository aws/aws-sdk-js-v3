import { _ReceiptRule } from "./_ReceiptRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReceiptRuleInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetName", "Rule"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    After: {
      shape: {
        type: "string"
      }
    },
    Rule: {
      shape: _ReceiptRule
    }
  }
};
