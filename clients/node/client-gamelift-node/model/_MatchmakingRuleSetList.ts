import { List as _List_ } from "@aws-sdk/types";
import { _MatchmakingRuleSet } from "./_MatchmakingRuleSet";

export const _MatchmakingRuleSetList: _List_ = {
  type: "list",
  member: {
    shape: _MatchmakingRuleSet
  }
};
