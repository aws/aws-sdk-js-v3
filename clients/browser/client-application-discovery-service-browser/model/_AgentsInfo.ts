import { List as _List_ } from "@aws-sdk/types";
import { _AgentInfo } from "./_AgentInfo";

export const _AgentsInfo: _List_ = {
  type: "list",
  member: {
    shape: _AgentInfo
  }
};
