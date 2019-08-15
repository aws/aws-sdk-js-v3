import { _DeviceCallbackOverrideMap } from "./_DeviceCallbackOverrideMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deviceType: {
      shape: {
        type: "string"
      }
    },
    callbackOverrides: {
      shape: _DeviceCallbackOverrideMap
    }
  }
};
