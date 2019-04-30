import { Map as _Map_ } from "@aws-sdk/types";
import { _MessageResult } from "./_MessageResult";

export const _MapOfMessageResult: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MessageResult
  }
};
