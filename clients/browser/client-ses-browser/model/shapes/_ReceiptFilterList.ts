import { List as _List_ } from "@aws-sdk/types";
import { _ReceiptFilter } from "./_ReceiptFilter";

export const _ReceiptFilterList: _List_ = {
  type: "list",
  member: {
    shape: _ReceiptFilter
  }
};
