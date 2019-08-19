import { List as _List_ } from "@aws-sdk/types";
import { _AgentVersion } from "./_AgentVersion";

export const _AgentVersions: _List_ = {
  type: "list",
  member: {
    shape: _AgentVersion
  }
};
