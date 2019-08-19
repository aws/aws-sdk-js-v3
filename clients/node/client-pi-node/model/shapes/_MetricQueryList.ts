import { List as _List_ } from "@aws-sdk/types";
import { _MetricQuery } from "./_MetricQuery";

export const _MetricQueryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _MetricQuery
  }
};
