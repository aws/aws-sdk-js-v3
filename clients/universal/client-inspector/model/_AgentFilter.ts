import { _AgentHealthList } from "./_AgentHealthList";
import { _AgentHealthCodeList } from "./_AgentHealthCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentFilter: _Structure_ = {
  type: "structure",
  required: ["agentHealths", "agentHealthCodes"],
  members: {
    agentHealths: {
      shape: _AgentHealthList
    },
    agentHealthCodes: {
      shape: _AgentHealthCodeList
    }
  }
};
