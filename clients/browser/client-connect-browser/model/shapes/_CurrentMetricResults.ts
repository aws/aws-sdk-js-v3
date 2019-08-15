import { List as _List_ } from "@aws-sdk/types";
import { _CurrentMetricResult } from "./_CurrentMetricResult";

export const _CurrentMetricResults: _List_ = {
  type: "list",
  member: {
    shape: _CurrentMetricResult
  }
};
