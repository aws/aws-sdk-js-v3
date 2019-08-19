import { Map as _Map_ } from "@aws-sdk/types";
import { _FieldStats } from "./_FieldStats";

export const _Stats: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _FieldStats
  }
};
