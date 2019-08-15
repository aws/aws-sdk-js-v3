import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationInstance } from "./_ReplicationInstance";

export const _ReplicationInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationInstance
  }
};
