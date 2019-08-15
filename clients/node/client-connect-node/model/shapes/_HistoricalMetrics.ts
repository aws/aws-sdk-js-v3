import { List as _List_ } from "@aws-sdk/types";
import { _HistoricalMetric } from "./_HistoricalMetric";

export const _HistoricalMetrics: _List_ = {
  type: "list",
  member: {
    shape: _HistoricalMetric
  }
};
