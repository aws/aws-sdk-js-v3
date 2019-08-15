import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeviceInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    DeviceName: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
