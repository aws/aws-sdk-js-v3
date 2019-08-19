import { List as _List_ } from "@aws-sdk/types";
import { _OrderableReplicationInstance } from "./_OrderableReplicationInstance";

export const _OrderableReplicationInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _OrderableReplicationInstance
  }
};
