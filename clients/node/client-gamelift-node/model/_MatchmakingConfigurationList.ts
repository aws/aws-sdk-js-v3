import { List as _List_ } from "@aws-sdk/types";
import { _MatchmakingConfiguration } from "./_MatchmakingConfiguration";

export const _MatchmakingConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _MatchmakingConfiguration
  }
};
