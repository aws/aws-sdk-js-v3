import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceInput: _Structure_ = {
  type: "structure",
  required: ["DeviceKey"],
  members: {
    DeviceKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
