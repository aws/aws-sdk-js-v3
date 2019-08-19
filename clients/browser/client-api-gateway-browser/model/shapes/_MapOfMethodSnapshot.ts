import { Map as _Map_ } from "@aws-sdk/types";
import { _MethodSnapshot } from "./_MethodSnapshot";

export const _MapOfMethodSnapshot: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MethodSnapshot
  }
};
