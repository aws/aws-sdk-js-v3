import { Map as _Map_ } from "@aws-sdk/types";
import { _RemediationParameterValue } from "./_RemediationParameterValue";

export const _RemediationParameters: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _RemediationParameterValue
  }
};
