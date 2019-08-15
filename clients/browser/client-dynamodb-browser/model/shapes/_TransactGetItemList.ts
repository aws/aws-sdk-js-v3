import { List as _List_ } from "@aws-sdk/types";
import { _TransactGetItem } from "./_TransactGetItem";

export const _TransactGetItemList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TransactGetItem
  }
};
