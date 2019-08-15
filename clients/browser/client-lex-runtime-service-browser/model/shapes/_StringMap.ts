import { Map as _Map_ } from "@aws-sdk/types";

export const _StringMap: _Map_ = {
  type: "map",
  sensitive: true,
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: {
      type: "string"
    }
  }
};
