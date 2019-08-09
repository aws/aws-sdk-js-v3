import { Map as _Map_ } from "@aws-sdk/types";
import { _Method } from "./_Method";

export const _MapOfMethod: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Method
  }
};
