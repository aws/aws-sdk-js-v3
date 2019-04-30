import { Map as _Map_ } from "@aws-sdk/types";
import { _Condition } from "./_Condition";

export const _FilterConditionMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Condition
  }
};
