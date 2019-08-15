import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstance } from "./_ScheduledInstance";

export const _PurchasedScheduledInstanceSet: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstance,
    locationName: "item"
  }
};
