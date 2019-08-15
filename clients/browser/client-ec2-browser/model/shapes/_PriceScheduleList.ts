import { List as _List_ } from "@aws-sdk/types";
import { _PriceSchedule } from "./_PriceSchedule";

export const _PriceScheduleList: _List_ = {
  type: "list",
  member: {
    shape: _PriceSchedule,
    locationName: "item"
  }
};
