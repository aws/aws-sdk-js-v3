import { Map as _Map_ } from "@aws-sdk/types";
import { _TargetMapValueList } from "./_TargetMapValueList";

export const _TargetMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _TargetMapValueList
  }
};
