import { _AgentList } from "./_AgentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAgentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Agents: {
      shape: _AgentList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
