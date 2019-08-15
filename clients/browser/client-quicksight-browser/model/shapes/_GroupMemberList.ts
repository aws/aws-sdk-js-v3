import { List as _List_ } from "@aws-sdk/types";
import { _GroupMember } from "./_GroupMember";

export const _GroupMemberList: _List_ = {
  type: "list",
  member: {
    shape: _GroupMember
  }
};
