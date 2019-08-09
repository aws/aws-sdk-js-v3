import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuleSummary: _Structure_ = {
  type: "structure",
  required: ["RuleId", "Name"],
  members: {
    RuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
