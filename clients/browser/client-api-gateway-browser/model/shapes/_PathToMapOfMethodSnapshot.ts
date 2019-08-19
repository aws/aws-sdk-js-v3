import { Map as _Map_ } from "@aws-sdk/types";
import { _MapOfMethodSnapshot } from "./_MapOfMethodSnapshot";

export const _PathToMapOfMethodSnapshot: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MapOfMethodSnapshot
  }
};
