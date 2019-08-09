import { _Device } from "./_Device";
import { _IncompatibilityMessages } from "./_IncompatibilityMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DevicePoolCompatibilityResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    device: {
      shape: _Device
    },
    compatible: {
      shape: {
        type: "boolean"
      }
    },
    incompatibilityMessages: {
      shape: _IncompatibilityMessages
    }
  }
};
