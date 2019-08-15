import { List as _List_ } from "@aws-sdk/types";
import { _MetricKeyDataPoints } from "./_MetricKeyDataPoints";

export const _MetricKeyDataPointsList: _List_ = {
  type: "list",
  member: {
    shape: _MetricKeyDataPoints
  }
};
