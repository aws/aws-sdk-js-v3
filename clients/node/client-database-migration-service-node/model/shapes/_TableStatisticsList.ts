import { List as _List_ } from "@aws-sdk/types";
import { _TableStatistics } from "./_TableStatistics";

export const _TableStatisticsList: _List_ = {
  type: "list",
  member: {
    shape: _TableStatistics
  }
};
