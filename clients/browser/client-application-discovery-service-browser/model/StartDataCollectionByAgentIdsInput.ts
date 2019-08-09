import { _AgentIds } from "./_AgentIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDataCollectionByAgentIdsInput: _Structure_ = {
  type: "structure",
  required: ["agentIds"],
  members: {
    agentIds: {
      shape: _AgentIds
    }
  }
};
