import { List as _List_ } from "@aws-sdk/types";
import { _Metric } from "./_Metric";

export const _Metrics: _List_ = {
  type: "list",
  member: {
    shape: _Metric
  }
};
