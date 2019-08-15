import { _AgentArnList } from "./_AgentArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OnPremConfig: _Structure_ = {
  type: "structure",
  required: ["AgentArns"],
  members: {
    AgentArns: {
      shape: _AgentArnList
    }
  }
};
