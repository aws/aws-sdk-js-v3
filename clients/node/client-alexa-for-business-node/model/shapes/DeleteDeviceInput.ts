import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeviceInput: _Structure_ = {
  type: "structure",
  required: ["DeviceArn"],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    }
  }
};
