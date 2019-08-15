import { List as _List_ } from "@aws-sdk/types";
import { _Invite } from "./_Invite";

export const _InviteList: _List_ = {
  type: "list",
  member: {
    shape: _Invite
  }
};
