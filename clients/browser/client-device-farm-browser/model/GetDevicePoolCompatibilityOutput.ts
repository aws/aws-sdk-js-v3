import { _DevicePoolCompatibilityResults } from "./_DevicePoolCompatibilityResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevicePoolCompatibilityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    compatibleDevices: {
      shape: _DevicePoolCompatibilityResults
    },
    incompatibleDevices: {
      shape: _DevicePoolCompatibilityResults
    }
  }
};
