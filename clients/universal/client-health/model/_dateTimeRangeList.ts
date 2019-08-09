import { List as _List_ } from "@aws-sdk/types";
import { _DateTimeRange } from "./_DateTimeRange";

export const _dateTimeRangeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DateTimeRange
  }
};
