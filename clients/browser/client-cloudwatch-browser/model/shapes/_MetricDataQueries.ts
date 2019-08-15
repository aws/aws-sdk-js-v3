import { List as _List_ } from "@aws-sdk/types";
import { _MetricDataQuery } from "./_MetricDataQuery";

export const _MetricDataQueries: _List_ = {
  type: "list",
  member: {
    shape: _MetricDataQuery
  }
};
