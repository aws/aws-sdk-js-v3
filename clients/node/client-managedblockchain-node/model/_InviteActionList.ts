import { List as _List_ } from "@aws-sdk/types";
import { _InviteAction } from "./_InviteAction";

export const _InviteActionList: _List_ = {
  type: "list",
  member: {
    shape: _InviteAction
  }
};
