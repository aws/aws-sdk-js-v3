import { List as _List_ } from "@aws-sdk/types";
import { _RecurringCharge } from "./_RecurringCharge";

export const _RecurringCharges: _List_ = {
  type: "list",
  member: {
    shape: _RecurringCharge
  }
};
