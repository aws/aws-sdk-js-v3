import { _MatchmakingRuleSet } from "./_MatchmakingRuleSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMatchmakingRuleSetOutput: _Structure_ = {
  type: "structure",
  required: ["RuleSet"],
  members: {
    RuleSet: {
      shape: _MatchmakingRuleSet
    }
  }
};
