import { Map as _Map_ } from "@aws-sdk/types";
import { _EventsBatch } from "./_EventsBatch";

export const _MapOfEventsBatch: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _EventsBatch
  }
};
