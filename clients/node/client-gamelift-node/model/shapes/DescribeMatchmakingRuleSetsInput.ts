import { _MatchmakingRuleSetNameList } from "./_MatchmakingRuleSetNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingRuleSetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _MatchmakingRuleSetNameList
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
