import { List as _List_ } from "@aws-sdk/types";
import { _MetricDimension } from "./_MetricDimension";

export const _MetricDimensions: _List_ = {
  type: "list",
  member: {
    shape: _MetricDimension
  }
};
