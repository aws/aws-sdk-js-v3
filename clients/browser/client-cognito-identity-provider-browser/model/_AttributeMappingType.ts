import { Map as _Map_ } from "@aws-sdk/types";

export const _AttributeMappingType: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: {
      type: "string"
    }
  }
};
