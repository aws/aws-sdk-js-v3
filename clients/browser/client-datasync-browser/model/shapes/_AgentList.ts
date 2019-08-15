import { List as _List_ } from "@aws-sdk/types";
import { _AgentListEntry } from "./_AgentListEntry";

export const _AgentList: _List_ = {
  type: "list",
  member: {
    shape: _AgentListEntry
  }
};
