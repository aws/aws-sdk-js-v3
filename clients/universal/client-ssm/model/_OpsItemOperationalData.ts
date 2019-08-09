import { Map as _Map_ } from "@aws-sdk/types";
import { _OpsItemDataValue } from "./_OpsItemDataValue";

export const _OpsItemOperationalData: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _OpsItemDataValue
  }
};
