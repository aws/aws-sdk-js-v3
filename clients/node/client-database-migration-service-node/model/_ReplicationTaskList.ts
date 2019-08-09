import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationTask } from "./_ReplicationTask";

export const _ReplicationTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationTask
  }
};
