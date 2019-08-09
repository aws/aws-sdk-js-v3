import { List as _List_ } from "@aws-sdk/types";
import { _User } from "./_User";

export const _userListType: _List_ = {
  type: "list",
  member: {
    shape: _User
  }
};
