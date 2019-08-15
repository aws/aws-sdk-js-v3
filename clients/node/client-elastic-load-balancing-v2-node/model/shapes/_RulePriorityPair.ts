import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RulePriorityPair: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleArn: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
