import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterMember } from "./_DBClusterMember";

export const _DBClusterMemberList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterMember,
    locationName: "DBClusterMember"
  }
};
