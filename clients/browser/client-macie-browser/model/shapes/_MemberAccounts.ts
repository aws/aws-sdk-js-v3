import { List as _List_ } from "@aws-sdk/types";
import { _MemberAccount } from "./_MemberAccount";

export const _MemberAccounts: _List_ = {
  type: "list",
  member: {
    shape: _MemberAccount
  }
};
