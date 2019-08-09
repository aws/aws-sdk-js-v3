import { Map as _Map_ } from "@aws-sdk/types";
import { _DeviceTemplate } from "./_DeviceTemplate";

export const _DeviceTemplateMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _DeviceTemplate
  }
};
