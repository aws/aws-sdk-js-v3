import { _MatchmakingConfigurationList } from "./_MatchmakingConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Configurations: {
      shape: _MatchmakingConfigurationList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
