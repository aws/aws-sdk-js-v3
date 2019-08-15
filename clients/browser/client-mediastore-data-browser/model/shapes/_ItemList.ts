import { List as _List_ } from "@aws-sdk/types";
import { _Item } from "./_Item";

export const _ItemList: _List_ = {
  type: "list",
  member: {
    shape: _Item
  }
};
