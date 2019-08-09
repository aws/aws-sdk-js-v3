import { List as _List_ } from "@aws-sdk/types";
import { _Member } from "./_Member";

export const _MemberList: _List_ = {
  type: "list",
  member: {
    shape: _Member
  }
};
