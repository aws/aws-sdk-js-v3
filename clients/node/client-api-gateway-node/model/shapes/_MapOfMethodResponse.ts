import { Map as _Map_ } from "@aws-sdk/types";
import { _MethodResponse } from "./_MethodResponse";

export const _MapOfMethodResponse: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MethodResponse
  }
};
