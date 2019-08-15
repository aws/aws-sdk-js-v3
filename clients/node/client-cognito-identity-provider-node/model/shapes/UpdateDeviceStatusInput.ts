import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeviceStatusInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken", "DeviceKey"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceRememberedStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
