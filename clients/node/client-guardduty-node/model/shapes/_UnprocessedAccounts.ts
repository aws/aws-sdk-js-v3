import { List as _List_ } from "@aws-sdk/types";
import { _UnprocessedAccount } from "./_UnprocessedAccount";

export const _UnprocessedAccounts: _List_ = {
  type: "list",
  member: {
    shape: _UnprocessedAccount
  }
};
