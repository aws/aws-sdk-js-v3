import { List as _List_ } from "@aws-sdk/types";
import { _PolicyUser } from "./_PolicyUser";

export const _PolicyUserListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyUser
  }
};
