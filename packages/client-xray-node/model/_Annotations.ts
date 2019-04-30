import { Map as _Map_ } from "@aws-sdk/types";
import { _ValuesWithServiceIds } from "./_ValuesWithServiceIds";

export const _Annotations: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ValuesWithServiceIds
  }
};
