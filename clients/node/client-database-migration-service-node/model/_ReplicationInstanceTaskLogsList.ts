import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationInstanceTaskLog } from "./_ReplicationInstanceTaskLog";

export const _ReplicationInstanceTaskLogsList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationInstanceTaskLog
  }
};
