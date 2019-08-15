import { Map as _Map_ } from "@aws-sdk/types";
import { _Configuration } from "./_Configuration";

export const _EventConfigurations: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Configuration
  }
};
