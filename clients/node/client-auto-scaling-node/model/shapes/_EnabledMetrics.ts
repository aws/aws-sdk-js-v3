import { List as _List_ } from "@aws-sdk/types";
import { _EnabledMetric } from "./_EnabledMetric";

export const _EnabledMetrics: _List_ = {
  type: "list",
  member: {
    shape: _EnabledMetric
  }
};
