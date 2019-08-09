import { List as _List_ } from "@aws-sdk/types";
import { _EntityAggregate } from "./_EntityAggregate";

export const _EntityAggregateList: _List_ = {
  type: "list",
  member: {
    shape: _EntityAggregate
  }
};
