import { List as _List_ } from "@aws-sdk/types";
import { _AggregationAuthorization } from "./_AggregationAuthorization";

export const _AggregationAuthorizationList: _List_ = {
  type: "list",
  member: {
    shape: _AggregationAuthorization
  }
};
