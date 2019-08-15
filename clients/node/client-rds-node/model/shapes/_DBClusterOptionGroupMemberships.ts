import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterOptionGroupStatus } from "./_DBClusterOptionGroupStatus";

export const _DBClusterOptionGroupMemberships: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterOptionGroupStatus,
    locationName: "DBClusterOptionGroup"
  }
};
