import { _MatchmakingRuleSetList } from "./_MatchmakingRuleSetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingRuleSetsOutput: _Structure_ = {
  type: "structure",
  required: ["RuleSets"],
  members: {
    RuleSets: {
      shape: _MatchmakingRuleSetList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
