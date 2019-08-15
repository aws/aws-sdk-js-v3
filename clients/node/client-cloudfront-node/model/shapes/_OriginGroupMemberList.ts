import { List as _List_ } from "@aws-sdk/types";
import { _OriginGroupMember } from "./_OriginGroupMember";

export const _OriginGroupMemberList: _List_ = {
  type: "list",
  min: 2,
  member: {
    shape: _OriginGroupMember,
    locationName: "OriginGroupMember"
  }
};
