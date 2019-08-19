import { List as _List_ } from "@aws-sdk/types";
import { _BillingRecord } from "./_BillingRecord";

export const _BillingRecords: _List_ = {
  type: "list",
  member: {
    shape: _BillingRecord
  }
};
