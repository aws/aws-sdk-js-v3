import { List as _List_ } from "@aws-sdk/types";
import { _ReceiptAction } from "./_ReceiptAction";

export const _ReceiptActionsList: _List_ = {
  type: "list",
  member: {
    shape: _ReceiptAction
  }
};
