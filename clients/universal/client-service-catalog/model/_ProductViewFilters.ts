import { Map as _Map_ } from "@aws-sdk/types";
import { _ProductViewFilterValues } from "./_ProductViewFilterValues";

export const _ProductViewFilters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ProductViewFilterValues
  }
};
