import { List as _List_ } from "@aws-sdk/types";
import { _AccountLimit } from "./_AccountLimit";

export const _AccountLimitList: _List_ = {
  type: "list",
  member: {
    shape: _AccountLimit
  }
};
