import { _DevicesList } from "./_DevicesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LinuxParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    devices: {
      shape: _DevicesList
    }
  }
};
