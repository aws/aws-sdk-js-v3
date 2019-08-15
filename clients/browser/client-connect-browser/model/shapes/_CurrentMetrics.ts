import { List as _List_ } from "@aws-sdk/types";
import { _CurrentMetric } from "./_CurrentMetric";

export const _CurrentMetrics: _List_ = {
  type: "list",
  member: {
    shape: _CurrentMetric
  }
};
