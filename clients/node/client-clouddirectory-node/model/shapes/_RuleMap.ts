import { Map as _Map_ } from "@aws-sdk/types";
import { _Rule } from "./_Rule";

export const _RuleMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _Rule
  }
};
