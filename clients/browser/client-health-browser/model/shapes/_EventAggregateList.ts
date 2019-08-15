import { List as _List_ } from "@aws-sdk/types";
import { _EventAggregate } from "./_EventAggregate";

export const _EventAggregateList: _List_ = {
  type: "list",
  member: {
    shape: _EventAggregate
  }
};
