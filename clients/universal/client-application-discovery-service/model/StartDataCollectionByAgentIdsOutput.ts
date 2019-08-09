import { _AgentConfigurationStatusList } from "./_AgentConfigurationStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDataCollectionByAgentIdsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentsConfigurationStatus: {
      shape: _AgentConfigurationStatusList
    }
  }
};
