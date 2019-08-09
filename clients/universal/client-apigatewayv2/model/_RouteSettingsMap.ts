import { Map as _Map_ } from "@aws-sdk/types";
import { _RouteSettings } from "./_RouteSettings";

export const _RouteSettingsMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _RouteSettings
  }
};
