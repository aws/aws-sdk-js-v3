import { Map as _Map_ } from "@aws-sdk/types";
import { _OpsEntityItem } from "./_OpsEntityItem";

export const _OpsEntityItemMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _OpsEntityItem
  }
};
