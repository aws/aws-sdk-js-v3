import { Map as _Map_ } from "@aws-sdk/types";
import { _Strings } from "./_Strings";

export const _Filters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Strings
  }
};
