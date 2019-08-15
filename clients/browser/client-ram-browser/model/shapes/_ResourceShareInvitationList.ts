import { List as _List_ } from "@aws-sdk/types";
import { _ResourceShareInvitation } from "./_ResourceShareInvitation";

export const _ResourceShareInvitationList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceShareInvitation
  }
};
