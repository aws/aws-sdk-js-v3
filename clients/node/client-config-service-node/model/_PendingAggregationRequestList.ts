import { List as _List_ } from "@aws-sdk/types";
import { _PendingAggregationRequest } from "./_PendingAggregationRequest";

export const _PendingAggregationRequestList: _List_ = {
  type: "list",
  member: {
    shape: _PendingAggregationRequest
  }
};
