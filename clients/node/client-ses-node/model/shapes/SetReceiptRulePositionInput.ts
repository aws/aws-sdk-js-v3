import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetReceiptRulePositionInput: _Structure_ = {
  type: "structure",
  required: ["RuleSetName", "RuleName"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    RuleName: {
      shape: {
        type: "string"
      }
    },
    After: {
      shape: {
        type: "string"
      }
    }
  }
};
