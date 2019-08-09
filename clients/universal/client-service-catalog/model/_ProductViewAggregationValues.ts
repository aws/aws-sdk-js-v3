import { List as _List_ } from "@aws-sdk/types";
import { _ProductViewAggregationValue } from "./_ProductViewAggregationValue";

export const _ProductViewAggregationValues: _List_ = {
  type: "list",
  member: {
    shape: _ProductViewAggregationValue
  }
};
