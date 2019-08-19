import { Map as _Map_ } from "@aws-sdk/types";
import { _ParameterValueList } from "./_ParameterValueList";

export const _Parameters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ParameterValueList
  }
};
