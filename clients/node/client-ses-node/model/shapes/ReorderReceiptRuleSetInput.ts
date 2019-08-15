import { _ReceiptRuleNamesList } from "./_ReceiptRuleNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReorderReceiptRuleSetInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetName", "RuleNames"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    RuleNames: {
      shape: _ReceiptRuleNamesList
    }
  }
};
