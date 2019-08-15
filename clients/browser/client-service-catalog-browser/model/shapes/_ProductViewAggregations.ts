import { Map as _Map_ } from "@aws-sdk/types";
import { _ProductViewAggregationValues } from "./_ProductViewAggregationValues";

export const _ProductViewAggregations: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ProductViewAggregationValues
  }
};
