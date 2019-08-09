import { _DeviceMethod } from "./_DeviceMethod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeDeviceMethodInput: _Structure_ = {
  type: "structure",
  required: ["DeviceId"],
  members: {
    DeviceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deviceId"
    },
    DeviceMethod: {
      shape: _DeviceMethod,
      locationName: "deviceMethod"
    },
    DeviceMethodParameters: {
      shape: {
        type: "string"
      },
      locationName: "deviceMethodParameters"
    }
  }
};
