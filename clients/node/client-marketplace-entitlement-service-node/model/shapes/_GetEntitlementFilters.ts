import { Map as _Map_ } from "@aws-sdk/types";
import { _FilterValueList } from "./_FilterValueList";

export const _GetEntitlementFilters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _FilterValueList
  }
};
