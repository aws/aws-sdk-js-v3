import { List as _List_ } from "@aws-sdk/types";
import { _CurrentMetricData } from "./_CurrentMetricData";

export const _CurrentMetricDataCollections: _List_ = {
  type: "list",
  member: {
    shape: _CurrentMetricData
  }
};
