import { List as _List_ } from "@aws-sdk/types";
import { _ResourceGroup } from "./_ResourceGroup";

export const _ResourceGroupList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceGroup
  }
};
