import { List as _List_ } from "@aws-sdk/types";
import { _MetricDataResult } from "./_MetricDataResult";

export const _MetricDataResults: _List_ = {
  type: "list",
  member: {
    shape: _MetricDataResult
  }
};
