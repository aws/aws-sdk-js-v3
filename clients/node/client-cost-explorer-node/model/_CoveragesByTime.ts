import { List as _List_ } from "@aws-sdk/types";
import { _CoverageByTime } from "./_CoverageByTime";

export const _CoveragesByTime: _List_ = {
  type: "list",
  member: {
    shape: _CoverageByTime
  }
};
