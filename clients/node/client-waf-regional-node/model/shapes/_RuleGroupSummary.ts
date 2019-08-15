import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuleGroupSummary: _Structure_ = {
  type: "structure",
  required: ["RuleGroupId", "Name"],
  members: {
    RuleGroupId: {
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
