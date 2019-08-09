import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeviceUsageDataInput: _Structure_ = {
  type: "structure",
  required: ["DeviceArn", "DeviceUsageType"],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    DeviceUsageType: {
      shape: {
        type: "string"
      }
    }
  }
};
