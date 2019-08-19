import { Map as _Map_ } from "@aws-sdk/types";
import { _ThrottleSettings } from "./_ThrottleSettings";

export const _MapOfApiStageThrottleSettings: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _ThrottleSettings
  }
};
