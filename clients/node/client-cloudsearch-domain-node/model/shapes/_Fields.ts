import { Map as _Map_ } from "@aws-sdk/types";
import { _FieldValue } from "./_FieldValue";

export const _Fields: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _FieldValue
  }
};
