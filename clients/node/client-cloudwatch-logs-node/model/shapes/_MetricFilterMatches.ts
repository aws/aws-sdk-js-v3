import { List as _List_ } from "@aws-sdk/types";
import { _MetricFilterMatchRecord } from "./_MetricFilterMatchRecord";

export const _MetricFilterMatches: _List_ = {
  type: "list",
  member: {
    shape: _MetricFilterMatchRecord
  }
};
