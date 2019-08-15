import { _MatchmakingConfiguration } from "./_MatchmakingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMatchmakingConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Configuration: {
      shape: _MatchmakingConfiguration
    }
  }
};
