import { Map as _Map_ } from "@aws-sdk/types";
import { _MethodSetting } from "./_MethodSetting";

export const _MapOfMethodSettings: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MethodSetting
  }
};
