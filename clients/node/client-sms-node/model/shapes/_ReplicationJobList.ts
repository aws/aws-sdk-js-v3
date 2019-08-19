import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationJob } from "./_ReplicationJob";

export const _ReplicationJobList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationJob
  }
};
