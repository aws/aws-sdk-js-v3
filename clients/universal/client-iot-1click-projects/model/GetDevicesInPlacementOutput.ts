import { _DeviceMap } from "./_DeviceMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevicesInPlacementOutput: _Structure_ = {
  type: "structure",
  required: ["devices"],
  members: {
    devices: {
      shape: _DeviceMap
    }
  }
};
