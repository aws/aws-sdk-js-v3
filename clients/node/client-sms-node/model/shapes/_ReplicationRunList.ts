import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationRun } from "./_ReplicationRun";

export const _ReplicationRunList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationRun
  }
};
