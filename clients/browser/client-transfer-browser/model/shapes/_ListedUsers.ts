import { List as _List_ } from "@aws-sdk/types";
import { _ListedUser } from "./_ListedUser";

export const _ListedUsers: _List_ = {
  type: "list",
  member: {
    shape: _ListedUser
  }
};
