import { List as _List_ } from "@aws-sdk/types";
import { _GlobalClusterMember } from "./_GlobalClusterMember";

export const _GlobalClusterMemberList: _List_ = {
  type: "list",
  member: {
    shape: _GlobalClusterMember,
    locationName: "GlobalClusterMember"
  }
};
