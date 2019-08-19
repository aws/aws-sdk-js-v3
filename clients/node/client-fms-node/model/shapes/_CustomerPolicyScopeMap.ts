import { Map as _Map_ } from "@aws-sdk/types";
import { _CustomerPolicyScopeIdList } from "./_CustomerPolicyScopeIdList";

export const _CustomerPolicyScopeMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _CustomerPolicyScopeIdList
  }
};
