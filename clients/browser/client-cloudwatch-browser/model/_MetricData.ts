import { List as _List_ } from "@aws-sdk/types";
import { _MetricDatum } from "./_MetricDatum";

export const _MetricData: _List_ = {
  type: "list",
  member: {
    shape: _MetricDatum
  }
};
