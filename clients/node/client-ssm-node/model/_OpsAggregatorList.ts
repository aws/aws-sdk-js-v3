import { List as _List_ } from "@aws-sdk/types";
import { _OpsAggregator } from "./_OpsAggregator";

export const _OpsAggregatorList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _OpsAggregator
  }
};
