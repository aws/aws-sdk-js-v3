import { Map as _Map_ } from "@aws-sdk/types";
import { _ParameterConstraints } from "./_ParameterConstraints";

export const _RouteParameters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ParameterConstraints
  }
};
