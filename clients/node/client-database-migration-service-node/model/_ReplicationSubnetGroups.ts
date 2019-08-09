import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationSubnetGroup } from "./_ReplicationSubnetGroup";

export const _ReplicationSubnetGroups: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationSubnetGroup
  }
};
