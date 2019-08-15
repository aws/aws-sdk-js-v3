import { List as _List_ } from "@aws-sdk/types";
import { _OfferingTransaction } from "./_OfferingTransaction";

export const _OfferingTransactions: _List_ = {
  type: "list",
  member: {
    shape: _OfferingTransaction
  }
};
