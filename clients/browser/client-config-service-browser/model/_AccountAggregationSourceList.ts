import { List as _List_ } from "@aws-sdk/types";
import { _AccountAggregationSource } from "./_AccountAggregationSource";

export const _AccountAggregationSourceList: _List_ = {
  type: "list",
  member: {
    shape: _AccountAggregationSource
  }
};
