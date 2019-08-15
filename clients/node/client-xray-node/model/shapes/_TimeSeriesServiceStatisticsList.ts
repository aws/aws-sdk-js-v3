import { List as _List_ } from "@aws-sdk/types";
import { _TimeSeriesServiceStatistics } from "./_TimeSeriesServiceStatistics";

export const _TimeSeriesServiceStatisticsList: _List_ = {
  type: "list",
  member: {
    shape: _TimeSeriesServiceStatistics
  }
};
