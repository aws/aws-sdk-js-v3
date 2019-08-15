import { _DevicePool } from "./_DevicePool";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevicePoolOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    devicePool: {
      shape: _DevicePool
    }
  }
};
