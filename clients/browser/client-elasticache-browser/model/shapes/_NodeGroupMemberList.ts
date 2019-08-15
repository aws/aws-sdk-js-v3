import { List as _List_ } from "@aws-sdk/types";
import { _NodeGroupMember } from "./_NodeGroupMember";

export const _NodeGroupMemberList: _List_ = {
  type: "list",
  member: {
    shape: _NodeGroupMember,
    locationName: "NodeGroupMember"
  }
};
