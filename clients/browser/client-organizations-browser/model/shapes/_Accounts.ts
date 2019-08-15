import { List as _List_ } from "@aws-sdk/types";
import { _Account } from "./_Account";

export const _Accounts: _List_ = {
  type: "list",
  member: {
    shape: _Account
  }
};
