import { Map as _Map_ } from "@aws-sdk/types";
import { _Exclusion } from "./_Exclusion";

export const _ExclusionMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _Exclusion
  }
};
