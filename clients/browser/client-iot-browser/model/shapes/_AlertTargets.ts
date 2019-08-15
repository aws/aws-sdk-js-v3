import { Map as _Map_ } from "@aws-sdk/types";
import { _AlertTarget } from "./_AlertTarget";

export const _AlertTargets: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _AlertTarget
  }
};
