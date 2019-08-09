import { List as _List_ } from "@aws-sdk/types";
import { _AgentNetworkInfo } from "./_AgentNetworkInfo";

export const _AgentNetworkInfoList: _List_ = {
  type: "list",
  member: {
    shape: _AgentNetworkInfo
  }
};
