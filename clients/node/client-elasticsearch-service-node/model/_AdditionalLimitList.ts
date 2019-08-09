import { List as _List_ } from "@aws-sdk/types";
import { _AdditionalLimit } from "./_AdditionalLimit";

export const _AdditionalLimitList: _List_ = {
  type: "list",
  member: {
    shape: _AdditionalLimit
  }
};
