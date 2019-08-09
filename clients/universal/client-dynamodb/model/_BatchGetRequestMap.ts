import { Map as _Map_ } from "@aws-sdk/types";
import { _KeysAndAttributes } from "./_KeysAndAttributes";

export const _BatchGetRequestMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 3
    }
  },
  value: {
    shape: _KeysAndAttributes
  }
};
