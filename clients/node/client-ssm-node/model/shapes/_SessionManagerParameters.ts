import { Map as _Map_ } from "@aws-sdk/types";
import { _SessionManagerParameterValueList } from "./_SessionManagerParameterValueList";

export const _SessionManagerParameters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _SessionManagerParameterValueList
  }
};
