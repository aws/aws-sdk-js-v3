import { List as _List_ } from "@aws-sdk/types";
import { _TransactWriteItem } from "./_TransactWriteItem";

export const _TransactWriteItemList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TransactWriteItem
  }
};
