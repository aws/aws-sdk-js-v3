import { Map as _Map_ } from "@aws-sdk/types";
import { _Limits } from "./_Limits";

export const _LimitsByRole: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Limits
  }
};
