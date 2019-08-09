import { List as _List_ } from "@aws-sdk/types";
import { _Invitation } from "./_Invitation";

export const _InvitationList: _List_ = {
  type: "list",
  member: {
    shape: _Invitation
  }
};
