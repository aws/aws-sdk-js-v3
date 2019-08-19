import { List as _List_ } from "@aws-sdk/types";
import { _ReplicationGroup } from "./_ReplicationGroup";

export const _ReplicationGroupList: _List_ = {
  type: "list",
  member: {
    shape: _ReplicationGroup,
    locationName: "ReplicationGroup"
  }
};
