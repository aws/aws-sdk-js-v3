import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDeviceWithNetworkProfileInput: _Structure_ = {
  type: "structure",
  required: ["DeviceArn", "NetworkProfileArn"],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    NetworkProfileArn: {
      shape: {
        type: "string"
      }
    }
  }
};
