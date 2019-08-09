import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MatchmakingRuleSet: _Structure_ = {
  type: "structure",
  required: ["RuleSetBody"],
  members: {
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    RuleSetBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
