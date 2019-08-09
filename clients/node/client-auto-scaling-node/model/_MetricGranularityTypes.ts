import { List as _List_ } from "@aws-sdk/types";
import { _MetricGranularityType } from "./_MetricGranularityType";

export const _MetricGranularityTypes: _List_ = {
  type: "list",
  member: {
    shape: _MetricGranularityType
  }
};
