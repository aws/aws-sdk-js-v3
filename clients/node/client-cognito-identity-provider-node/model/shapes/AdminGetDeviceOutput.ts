import { _DeviceType } from "./_DeviceType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminGetDeviceOutput: _Structure_ = {
  type: "structure",
  required: ["Device"],
  members: {
    Device: {
      shape: _DeviceType
    }
  }
};
