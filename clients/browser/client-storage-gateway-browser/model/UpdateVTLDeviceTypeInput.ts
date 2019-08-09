import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVTLDeviceTypeInput: _Structure_ = {
  type: "structure",
  required: ["VTLDeviceARN", "DeviceType"],
  members: {
    VTLDeviceARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DeviceType: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
