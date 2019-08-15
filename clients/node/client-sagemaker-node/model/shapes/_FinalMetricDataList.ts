import { List as _List_ } from "@aws-sdk/types";
import { _MetricData } from "./_MetricData";

export const _FinalMetricDataList: _List_ = {
  type: "list",
  member: {
    shape: _MetricData
  }
};
