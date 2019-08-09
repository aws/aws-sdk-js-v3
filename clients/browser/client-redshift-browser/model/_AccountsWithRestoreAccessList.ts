import { List as _List_ } from "@aws-sdk/types";
import { _AccountWithRestoreAccess } from "./_AccountWithRestoreAccess";

export const _AccountsWithRestoreAccessList: _List_ = {
  type: "list",
  member: {
    shape: _AccountWithRestoreAccess,
    locationName: "AccountWithRestoreAccess"
  }
};
