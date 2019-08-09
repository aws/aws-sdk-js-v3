import { List as _List_ } from "@aws-sdk/types";
import { _HistoricalMetricResult } from "./_HistoricalMetricResult";

export const _HistoricalMetricResults: _List_ = {
  type: "list",
  member: {
    shape: _HistoricalMetricResult
  }
};
