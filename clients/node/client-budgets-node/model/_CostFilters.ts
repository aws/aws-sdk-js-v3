import { Map as _Map_ } from "@aws-sdk/types";
import { _DimensionValues } from "./_DimensionValues";

export const _CostFilters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _DimensionValues
  }
};
