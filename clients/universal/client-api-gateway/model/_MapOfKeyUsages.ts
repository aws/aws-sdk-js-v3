import { Map as _Map_ } from "@aws-sdk/types";
import { _ListOfUsage } from "./_ListOfUsage";

export const _MapOfKeyUsages: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ListOfUsage
  }
};
