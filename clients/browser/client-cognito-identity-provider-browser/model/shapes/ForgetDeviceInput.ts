import { Structure as _Structure_ } from "@aws-sdk/types";

export const ForgetDeviceInput: _Structure_ = {
  type: "structure",
  required: ["DeviceKey"],
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
    }
  }
};
