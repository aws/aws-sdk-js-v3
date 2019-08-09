import { List as _List_ } from "@aws-sdk/types";
import { _CreateAccountStatus } from "./_CreateAccountStatus";

export const _CreateAccountStatuses: _List_ = {
  type: "list",
  member: {
    shape: _CreateAccountStatus
  }
};
