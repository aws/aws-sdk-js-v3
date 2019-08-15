import { Map as _Map_ } from "@aws-sdk/types";
import { _ListOf__string } from "./_ListOf__string";

export const _MapOfListOf__string: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ListOf__string
  }
};
