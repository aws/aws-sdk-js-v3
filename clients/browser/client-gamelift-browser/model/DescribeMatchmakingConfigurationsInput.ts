import { _MatchmakingIdList } from "./_MatchmakingIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingConfigurationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _MatchmakingIdList
    },
    RuleSetName: {
      shape: {
        type: "string"
      }
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
