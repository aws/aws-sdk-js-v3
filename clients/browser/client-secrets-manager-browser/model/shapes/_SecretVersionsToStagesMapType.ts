import { Map as _Map_ } from "@aws-sdk/types";
import { _SecretVersionStagesType } from "./_SecretVersionStagesType";

export const _SecretVersionsToStagesMapType: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 32
    }
  },
  value: {
    shape: _SecretVersionStagesType
  }
};
