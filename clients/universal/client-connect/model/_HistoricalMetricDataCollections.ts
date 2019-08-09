import { List as _List_ } from "@aws-sdk/types";
import { _HistoricalMetricData } from "./_HistoricalMetricData";

export const _HistoricalMetricDataCollections: _List_ = {
  type: "list",
  member: {
    shape: _HistoricalMetricData
  }
};
