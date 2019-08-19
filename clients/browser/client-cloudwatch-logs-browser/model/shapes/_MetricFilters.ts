import { List as _List_ } from "@aws-sdk/types";
import { _MetricFilter } from "./_MetricFilter";

export const _MetricFilters: _List_ = {
  type: "list",
  member: {
    shape: _MetricFilter
  }
};
