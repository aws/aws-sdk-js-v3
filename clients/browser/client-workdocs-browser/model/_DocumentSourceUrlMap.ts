import { Map as _Map_ } from "@aws-sdk/types";

export const _DocumentSourceUrlMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: {
      type: "string",
      sensitive: true,
      min: 1
    }
  }
};
